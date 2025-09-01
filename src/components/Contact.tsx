// import { useState } from 'react';
// import { Send, Mail, MapPin, Phone } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     toast({
//       title: "Message sent!",
//       description: "Thank you for your message. I'll get back to you soon!",
//     });

//     setFormData({ name: '', email: '', message: '' });
//     setIsSubmitting(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contactInfo = [
//     {
//       Icon: Mail,
//       title: 'Email',
//       value: 'Vrushabhsatpute07@gmail.com',
//       href: 'mailto:john.doe@example.com',
//     },
//     {
//       Icon: Phone,
//       title: 'Phone',
//       value: '+91 9970400571',
//       href: 'tel:+91 9970400571',
//     },
//     {
//       Icon: MapPin,
//       title: 'Location',
//       value: 'Vimannagar, Pune',
//       href: 'https://maps.google.com',
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 relative">
//       <div className="container mx-auto px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//               Get In Touch
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Have a project in mind or want to collaborate? I'd love to hear from you.
//               Let's create something amazing together!
//             </p>
//           </div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <Card className="bg-card/50 backdrop-blur-sm border-border/20">
//               <CardHeader>
//                 <CardTitle className="text-2xl flex items-center gap-2">
//                   <Send className="h-6 w-6 text-primary" />
//                   Send Message
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="space-y-4">
//                     <div>
//                       <Input
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                     <div>
//                       <Input
//                         name="email"
//                         type="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="h-12"
//                       />
//                     </div>
//                     <div>
//                       <Textarea
//                         name="message"
//                         placeholder="Your Message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows={6}
//                         className="resize-none"
//                       />
//                     </div>
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center gap-2">
//                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                         Sending...
//                       </div>
//                     ) : (
//                       <div className="flex items-center gap-2">
//                         <Send className="h-4 w-4" />
//                         Send Message
//                       </div>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
//                 <p className="text-muted-foreground leading-relaxed mb-8">
//                   I'm always interested in new opportunities and exciting projects. 
//                   Whether you have a question, want to collaborate, or just want to say hi, 
//                   feel free to reach out!
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {contactInfo.map(({ Icon, title, value, href }) => (
//                   <Card key={title} className="group hover:shadow-md transition-all duration-300 bg-card/30 backdrop-blur-sm border-border/20">
//                     <CardContent className="p-6">
//                       <a
//                         href={href}
//                         target={href.startsWith('http') ? '_blank' : undefined}
//                         rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                         className="flex items-center gap-4 group-hover:text-primary transition-colors duration-300"
//                       >
//                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                           <Icon className="h-6 w-6 text-primary" />
//                         </div>
//                         <div>
//                           <h4 className="font-semibold">{title}</h4>
//                           <p className="text-muted-foreground">{value}</p>
//                         </div>
//                       </a>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { send } from 'emailjs-com'; // EmailJS import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    send(
      'service_nbhyqx7',    // Replace with your EmailJS service ID
      'template_ycsgedk',   // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      'LNPE2Yf8wC9U8NtSJ'     // Replace with your EmailJS public key
    )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
        });
        setIsSubmitting(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: 'Email',
      value: 'Vrushabhsatpute07@gmail.com',
      href: 'mailto:Vrushabhsatpute07@gmail.com',
    },
    {
      Icon: Phone,
      title: 'Phone',
      value: '+91 9970400571',
      href: 'tel:+91 9970400571',
    },
    {
      Icon: MapPin,
      title: 'Location',
      value: 'Vimannagar, Pune',
      href: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/20">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a question, want to collaborate, or just want to say hi,
                  feel free to reach out!
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map(({ Icon, title, value, href }) => (
                  <Card key={title} className="group hover:shadow-md transition-all duration-300 bg-card/30 backdrop-blur-sm border-border/20">
                    <CardContent className="p-6">
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group-hover:text-primary transition-colors duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{title}</h4>
                          <p className="text-muted-foreground">{value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
