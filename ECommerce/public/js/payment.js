
const btn = document.querySelector('#buy-btn');


async function makeOrder(amount) {                 //jitni bhi ajax (axios etc) request use kri humne sab hi frontend ki js me use kr rhe
    try {                                          //because nodejs me fetch ya document api i.e. aise requests nhi bhej skte   

        const keyres = await axios.get('/keyid');
        // console.log(keyres);

        const res = await axios({
            method: 'post',
            data: { amount },
            url: `/order`,
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
        console.log(res.data.order.amount);

        const options = {
            "key": keyres.data.keyid, // Enter the Key ID generated from the Dashboard
            "amount": res.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Ecommerce Corp",
            "description": "Test Transaction",
            "image": "https://images.unsplash.com/photo-1592503254549-d83d24a4dfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            "order_id": res.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:5000/payment-verify/",
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }
    catch (e) {
        window.location.replace('/login');
    }

}

btn.addEventListener('click', () => {
    const amount = document.querySelector('#amount-display').innerText.split(' ')[1];
    makeOrder(amount);
})