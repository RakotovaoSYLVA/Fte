import {useRef, useState} from 'react'


function Contact() {

    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const sendEmail = async() => {
      let dataSend ={
        email: email,
        subject: subject,
        message: message,
      };

      const res = await fetch('http://localhost:8081/sendEmail', {
        method:"POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if(res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
          };
        })
    };
  return (
    <section>
        <div className='container'>
            <h2 className='--text-center'>Contactez-Nous</h2>
            <form  onSubmit={sendEmail}
             className='--form-control --card --flex-center --dir-column'>
                <input type="email" placeholder='Entrer votre Email' name='user_email' required/>
                <input type="text" placeholder='Subject' name='subject' required/>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                  <button type="submit" className="btn btn-primary">
                        Send Message
                  </button>
            </form>
        </div>
    </section>
  )
}

export default Contact