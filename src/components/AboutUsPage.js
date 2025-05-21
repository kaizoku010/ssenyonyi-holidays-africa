import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Button } from './ui/button';
import kitandra from '../media/kitandra.jpg';
import '../styles/AboutUsPage.css';

const AboutUsPage = ({ onClose }) => {
  return (
    <div className="about-us-page-overlay">
      <div className="about-us-page">
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="hero-section">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Nyonyi Holidays Africa - Explore. Connect. Protect.</p>
          </div>
        </div>
        
        <div className="about-us-content">
          <Tabs defaultValue="company" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="company">Company Profile</TabsTrigger>
              <TabsTrigger value="mission">Our Mission & Vision</TabsTrigger>
              <TabsTrigger value="conservation">Conservation</TabsTrigger>
              <TabsTrigger value="why">Why Choose Us</TabsTrigger>
            </TabsList>
            
            <TabsContent value="company" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Profile</CardTitle>
                  <CardDescription>Learn about Nyonyi Holidays Africa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Nyonyi Holidays Africa is a premier East African travel company dedicated to crafting unforgettable 
                    journeys across Uganda, Rwanda, and beyond. Rooted in the Swahili word for "bird," Nyonyi represents 
                    freedom, elegance, and the boundless spirit of exploration that guides our brand. We believe travel 
                    is not just about discovery—it's about stewardship.
                  </p>
                  <p>
                    From gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale, and game drives 
                    in Murchison Falls to Rwanda's golden savannahs of Akagera National Park, we connect discerning travelers 
                    to the true heart of Africa. Every itinerary we design prioritizes conservation-first tourism, ensuring 
                    that your journey supports the protection of endangered species, preserves fragile ecosystems, and 
                    empowers communities safeguarding these wild spaces.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <img 
                      src={kitandra} 
                      alt="Nyonyi Holidays Safari Experience" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-primary mr-2"></i>
                          <span>Personalized itineraries tailored to your interests</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-primary mr-2"></i>
                          <span>Expert local guides with deep knowledge</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-primary mr-2"></i>
                          <span>Conservation-focused experiences</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-primary mr-2"></i>
                          <span>Support for local communities</span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-check-circle text-primary mr-2"></i>
                          <span>Eco-friendly accommodations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mission" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      To design and deliver authentic African travel experiences that inspire, educate, and uplift—while 
                      fostering responsible tourism that directly contributes to wildlife conservation, habitat restoration, 
                      and sustainable livelihoods for local communities.
                    </p>
                    <div className="mt-6 bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Our Commitments:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-leaf text-primary mt-1 mr-2"></i>
                          <span>Minimize environmental impact of all our operations</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-handshake text-primary mt-1 mr-2"></i>
                          <span>Partner with local communities for authentic cultural exchanges</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-seedling text-primary mt-1 mr-2"></i>
                          <span>Contribute to reforestation and habitat restoration projects</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      To become Africa's most trusted and innovative travel partner, known globally for curating exceptional, 
                      meaningful, and sustainable journeys that leave a lasting legacy for people, wildlife, and the planet.
                    </p>
                    <div className="mt-6 bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Our Future Goals:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <i className="fas fa-globe-africa text-primary mt-1 mr-2"></i>
                          <span>Expand conservation initiatives across East Africa</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-users text-primary mt-1 mr-2"></i>
                          <span>Develop community-led tourism enterprises</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-lightbulb text-primary mt-1 mr-2"></i>
                          <span>Pioneer innovative sustainable tourism practices</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="conservation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Conservation Commitment</CardTitle>
                  <CardDescription>At Nyonyi Holidays Africa, conservation is at the core of every adventure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h3 className="font-semibold flex items-center text-lg mb-2">
                          <i className="fas fa-paw text-primary mr-2"></i>
                          Wildlife Guardianship
                        </h3>
                        <p>
                          A portion of every safari is donated to gorilla and chimpanzee conservation programs 
                          in Bwindi, Kibale, and Volcanoes National Park.
                        </p>
                      </div>
                      
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h3 className="font-semibold flex items-center text-lg mb-2">
                          <i className="fas fa-hands-helping text-primary mr-2"></i>
                          Community Partnerships
                        </h3>
                        <p>
                          We collaborate with local villages and NGOs to fund anti-poaching initiatives, 
                          reforestation projects, and wildlife corridors.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h3 className="font-semibold flex items-center text-lg mb-2">
                          <i className="fas fa-leaf text-primary mr-2"></i>
                          Eco-Certified Lodges
                        </h3>
                        <p>
                          We prioritize accommodations with proven sustainability practices, from 
                          solar-powered lodges to zero-waste policies.
                        </p>
                      </div>
                      
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h3 className="font-semibold flex items-center text-lg mb-2">
                          <i className="fas fa-book-open text-primary mr-2"></i>
                          Traveler Education
                        </h3>
                        <p>
                          Our expert guides share insights on conservation challenges and victories, 
                          turning every safari into a lesson in preservation.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button className="mt-4">Learn More About Our Conservation Efforts</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="why" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Why Travel with Us?</CardTitle>
                  <CardDescription>Discover the Nyonyi Holidays Africa difference</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-primary/10 p-6 rounded-lg text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-globe-africa text-2xl"></i>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Conservation-Driven Safaris</h3>
                      <p>
                        Your journey directly funds wildlife protection and community upliftment.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-binoculars text-2xl"></i>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Ethical Wildlife Encounters</h3>
                      <p>
                        We adhere to strict guidelines to minimize ecological impact during gorilla treks, 
                        game drives, and forest walks.
                      </p>
                    </div>
                    
                    <div className="bg-primary/10 p-6 rounded-lg text-center">
                      <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-seedling text-2xl"></i>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Legacy Travel</h3>
                      <p>
                        Leave footprints of hope - every booking plants indigenous trees in degraded habitats.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-secondary p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-3 text-center">Our Travelers Say</h3>
                    <div className="italic text-center">
                      "Our safari with Nyonyi Holidays was transformative. Not only did we have incredible wildlife encounters, 
                      but we left knowing our journey had made a positive impact on conservation efforts. The guides were 
                      exceptional and the entire experience was seamless."
                      <div className="mt-2 font-semibold not-italic">— Sarah & James, UK</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
