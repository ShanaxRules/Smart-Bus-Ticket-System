function clicker(id){
    document.getElementById(id).addEventListener('click' , function(){
        const obj = document.getElementById(id);
        if (!obj.className.includes('bg-[#1dd100]') || !obj.className.includes('bg-[#1DD100]')){
            obj.className.remove('bg-gray-200');
            obj.className.remove('text-gray-500');
            obj.className.add('bg-[#1dd100]');
            obj.className.add('text-white');
        }

        else{
            obj.className.remove('bg-[#1dd100]');
            obj.className.remove('text-white');
            obj.className.add('bg-gray-200');
            obj.className.add('text-gray-500');
        }

    });
}

document.addEventListener('click' , function(event){
    const objects1 = document.getElementsByClassName('holder-1');
    const objects2 = document.getElementsByClassName('holder-2');
    for (const obj of objects1){
        if (obj.contains(event.target)){
            console.log(obj);
        }
    }
    for (const obj of objects2){
        if (obj.contains(event.target)){
            console.log(event.target.value);
        }
    }
});