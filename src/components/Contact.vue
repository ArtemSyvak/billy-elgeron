<template>
    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-10">
            <form action="">

            </form>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
    export default {
        name: "Contact",
        data(){
          return{
            email:'artsyvak@gmail.com',
          }
        },
      created(){
        // this.mailSender();
      },
      methods:{
          mailSender(){
            nodemailer.createTestAccount((err, account)=>{

              let transporter = nodemailer.createTransport({
                  host: 'smtp.ethereal.email',
                  port: 587,
                  secure: false,
                  auth:{
                      user:account.user,
                      pass: account.pass
                  }
              });

              let mailOptions = {
                from: 'artsyvak@gmail.com',
                to: 'artsyvak@gmail.com',
                subject: 'Hello!',
                text: 'This is a Billy Elgeron',
                html: '<b>welcome in my game</b>'
              };

              transporter.sendMail(mailOptions,(error,info)=> {
                if(error){
                  return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview Url: %s',
                nodemailer.getTestMessageUrl(info));
              });

            });
          }
      }
    }
</script>

<style scoped>

</style>
