
let total=0;





function clicker(id){
   
        const obj = document.getElementById(id);
        const Ul = document.getElementById('list-holder');
        if (!obj.classList.contains('lg:bg-[#1dd100]') && !obj.classList.contains('lg:bg-[#1DD100]')){
            
            
            obj.classList.remove('lg:bg-[#f7f8f8]');
            obj.classList.remove('md:bg-[#f7f8f8]');
            obj.classList.remove('bg-gray-200');
            obj.classList.remove('text-gray-500');
            obj.classList.add('lg:bg-[#1dd100]');
            obj.classList.add('md:bg-[#1dd100]');
            obj.classList.add('bg-[#1dd100]');
            obj.classList.add('text-white');
            const li = document.createElement('li');
            li.id=obj.innerText;
            li.className = "flex justify-between items-center py-2" ;
            li.innerHTML=` 
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

            

        }

        else if (obj.classList.contains('lg:bg-[#1dd100]')){

            let uler = document.getElementById('list-holder');
            obj.classList.remove('lg:bg-[#1dd100]');
            obj.classList.remove('md:bg-[#1dd100]');
            obj.classList.remove('bg-[#1dd100]');
            obj.classList.remove('text-white');
            obj.classList.add('lg:bg-[#f7f8f8]');
            obj.classList.add('md:bg-[#f7f8f8]');
            obj.classList.add('bg-gray-200');
            obj.classList.add('text-gray-500');
            const objList = document.getElementsByClassName('lister');
            const obj3 = document.getElementById(obj.innerText);
            uler.removeChild(obj3);

        }

    }


