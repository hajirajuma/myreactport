
import mail_icon from '../assets/Projects/mail_icon.svg'
import location_icon from '../assets/Projects/location_icon.svg'
import call_icon from '../assets/Projects/call_icon.svg'

export const ContactSection = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d99b4276-e560-4cdd-af26-b004fe52e9fe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
    return (
        <div id='contact' className='py-20 px-4 md:px-8 lg:px-16 bg-background'>
            <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in touch</h1>
                  
             </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-8">
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's talk</h1>
                      <p className="text-lg text-foreground/70 leading-relaxed">
                         I'm currently available to take on new projects, so
                         feel free to send me a message about anything that
                         you want me to work on. You can contact anytime.
                      </p>
                      <div className="space-y-6">
                           <div className="flex items-center space-x-4">
                                <img src={mail_icon} alt="" className="w-6 h-6 flex-shrink-0"/>
                                <p className="text-foreground/80 text-lg">hajiraj475@gmail.com</p>
                           </div>
                             <div className="flex items-center space-x-4">
                                  <img src={call_icon} alt="" className="w-6 h-6 flex-shrink-0"/>
                                  <p className="text-foreground/80 text-lg">+265995058810</p>
                           </div>
                             <div className="flex items-center space-x-4">
                                  <img src={location_icon} alt="" className="w-6 h-6 flex-shrink-0"/>
                                  <p className="text-foreground/80 text-lg">Malawi</p>
                           </div>
                      </div>
                </div>
                <div className="space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name"
                          placeholder='Enter your name' 
                          name='name'
                          className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Your Email</label>
                        <input 
                          type="email" 
                          id="email"
                          placeholder='Enter your email' 
                          name='email'
                          className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Write your message here</label>
                        <textarea 
                          name="message" 
                          id="message"
                          rows="8" 
                          placeholder='Enter your message'
                          className="w-full px-4 py-3 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 resize-vertical"
                        ></textarea>
                      </div>
                      <button 
                        type='submit' 
                        onClick={onSubmit}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      >
                        Submit now
                      </button>
                </div>
            </div>
        </div>
    )
}

