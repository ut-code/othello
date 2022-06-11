for(let i=1; i<9; i++){
    for(let j=1; j<9; j++){
        let number=10*i+j;
        document.getElementById(`${number}`).onclick = async () => {
            const response = await fetch(`/put?position=${number}`);
            const list = await response.text();
            alert(list);
        }
    }
}
    
