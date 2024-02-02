        // Objects to store selected flowers and cart items
        let bouquet = {};
        let cart = [];

        // Function to add a flower to the bouquet
        function addFlower(flowerName) {
            if (!bouquet[flowerName]) {
                bouquet[flowerName] = 1;
            } else {
                bouquet[flowerName]++;
            }
            updateCounter();
        }

        // Function to remove a flower from the bouquet
        function removeFlower(flowerName) {
            if (bouquet[flowerName] && bouquet[flowerName] > 0) {
                bouquet[flowerName]--;
                updateCounter();
            }
        }

        // Function to reset the flower counter
        function resetCounter() {
            bouquet = {};
            updateCounter();
        }

        // Function to update the flower counter display
        function updateCounter() {
            const counterElement = document.getElementById('total-counter');
            let totalCount = 0;

            for (const flower in bouquet) {
                totalCount += bouquet[flower];
                const flowerCounter = document.getElementById(`${flower}-counter`);
                if (flowerCounter) {
                    flowerCounter.textContent = bouquet[flower];
                }
            }

            counterElement.textContent = `Total Flowers: ${totalCount} (${Object.keys(bouquet).map(flower => `${flower}: ${bouquet[flower]}`).join(', ')})`;
        }

        // Function to add the current bouquet to the cart and reset the counter
        function orderNow() {
            const totalCounter = document.getElementById('total-counter');
            const totalCount = parseInt(totalCounter.innerText.split(':')[1].trim());

           if(totalCount!=0){
             // Build the WhatsApp link with the total number of flowers and individual flower names
             const flowerDetails = Object.keys(bouquet).map(flower => `${flower}: ${bouquet[flower]}`).join(', ');
             const whatsappLink = `https://wa.me/+201060411598?text=can%20i%20order%20this%0ATotal%20Flowers:%20${totalCount}%0A${flowerDetails}`;
             // Open the WhatsApp link
             window.location.href = whatsappLink;

             // Reset the counter after ordering
             resetCounter();
           }
           else{
            alert("You didn't choose any flowers")
           }
        }



        // Function to navigate to the checkout page
        function checkout() {
            window.location.href = 'checkout.html';
        }

        // Function to navigate to the home page
        function goToIndex() {
            window.location.href = 'index.html';
        }

        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.transform = sidebar.style.transform === 'translateX(0)' ? 'translateX(-100%)' : 'translateX(0)';
        }

        function toggleSidebar() {
            var sidebar = document.getElementById('sidebar');
            var openBtn = document.querySelector('.open-btn');
          
            if (sidebar.style.width === '250px') {
              sidebar.style.width = '0';
              openBtn.innerHTML = '<div class="hamburger"></div><div class="hamburger"></div><div class="hamburger"></div>';
            } else {
              sidebar.style.width = '250px';
              openBtn.innerHTML = '<div class="hamburger"></div><div class="hamburger"></div><div class="hamburger"></div>';
            }
          }
          