function toggleInfo(id){

    const detail = document.getElementById(id);

    if(detail.style.display === "block"){
        detail.style.display = "none";
    }else{
        detail.style.display = "block";
    }

}