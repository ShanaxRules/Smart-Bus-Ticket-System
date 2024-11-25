
let total = 0;
let voucher = 0;
let newTotal = 0;

let flag = 0;

let selectedObject = 0;



let modal = document.getElementById('my_modal_1');
let divClicker = document.getElementById('gridder');

function showModal() {
    modal.showModal();
}

function clicker(id) {
    const obj = document.getElementById(id);
    const Ul = document.getElementById('list-holder');
    
    if (!obj.classList.contains('lg:bg-[#1dd100]') && !obj.classList.contains('lg:bg-[#1DD100]')) {
        if (selectedObject < 4) {
            
            obj.classList.remove('lg:bg-[#f7f8f8]');
            obj.classList.remove('md:bg-[#f7f8f8]');
            obj.classList.remove('bg-gray-200');
            obj.classList.remove('text-gray-500');
            obj.classList.add('lg:bg-[#1dd100]');
            obj.classList.add('md:bg-[#1dd100]');
            obj.classList.add('bg-[#1dd100]');
            obj.classList.add('text-white');
            
            
            const li = document.createElement('li');
            li.id = obj.innerText;
            li.className = "flex justify-between items-center py-2";
            li.innerHTML = ` 
                <div>
                    <h1 class="text-gray-600">${obj.innerText}</h1>
                </div>
                <div>
                    <h1 class="text-gray-600">Economy</h1>
                </div>
                <div>
                    <h1 class="text-gray-600">550</h1>
                </div>
            `;
            Ul.appendChild(li);
            
            
            total += 550;
            document.getElementById('total_amount').innerText = total;
            document.getElementById('final-amount').innerText = total;
            newTotal=total;
            
            selectedObject += 1;

            
            if (selectedObject >=4) {
                divClicker.addEventListener('click', showModal);
            }
        }
    } else if (obj.classList.contains('lg:bg-[#1dd100]')) {
        
        let uler = document.getElementById('list-holder');
        obj.classList.remove('lg:bg-[#1dd100]');
        obj.classList.remove('md:bg-[#1dd100]');
        obj.classList.remove('bg-[#1dd100]');
        obj.classList.remove('text-white');
        obj.classList.add('lg:bg-[#f7f8f8]');
        obj.classList.add('md:bg-[#f7f8f8]');
        obj.classList.add('bg-gray-200');
        obj.classList.add('text-gray-500');

       
        const obj3 = document.getElementById(obj.innerText);
        uler.removeChild(obj3);
        
       
        total -= 550;
        newTotal=total;
        flag=0;
        document.getElementById('total_amount').innerText = total;
        document.getElementById('final-amount').innerText = total;
        
        selectedObject -= 1;

        
        if (selectedObject < 4) {
            divClicker.removeEventListener('click', showModal);
        }
    }
}




document.getElementById('voucher').addEventListener('click', function () {
    const input = document.getElementById('voucher-input');
    if (input.value === 'NEW15' && flag === 0) {
        const value1 = total * 0.15;
        newTotal = total - value1;
        input.value = '';
        flag = 1;
    }

    else if (input.value === 'Couple20' && flag === 0) {
        const value1 = total * 0.20;
        newTotal = total - value1;
        input.value = '';
        flag = 1;
    }

    const obj2 = document.getElementById('final-amount');
    obj2.innerText = newTotal;


})


