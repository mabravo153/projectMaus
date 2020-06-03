(function() {
    
    document.addEventListener('DOMContentLoaded', function() {
      
        if(document.querySelector('#name')){

            let name = document.querySelector('#name')

            name.addEventListener('change', async (e) => {
                e.preventDefault()

                const value = document.querySelector('#name').value

                let response = await fetch(`http://localhost:9000/charge/${value}`)

                if(response.ok){
                    let data = await response.json()
                    let { cargo } = data.msg
                    
                    document.querySelector('#cargo').value = cargo
                    
                }
                
            })

        }
        
    })
})();