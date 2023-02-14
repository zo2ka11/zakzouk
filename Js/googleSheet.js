const scriptURL = "https://script.google.com/macros/s/AKfycbxJtzXUpz1ERBPO9HCTBC7wj1WITYX4JsulC20PJPbv5rV_bcIVf5U8k91dq4JdgNs0/exec";
            const form = document.forms['submit-to-google-sheet'];
            const msg = document.getElementById("msg");
        
            form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    msg.innerHTML = "Message Sent Successfully !";
                    setTimeout(function(){
                        msg.innerHTML = "";
                    }, 5000)

                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })