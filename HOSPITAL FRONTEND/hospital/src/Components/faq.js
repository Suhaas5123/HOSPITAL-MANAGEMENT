import React from 'react';
import './faq.css';

function CustomerService() {
  return (
    <>
      <div class="faq-header">Frequently Asked Questions</div>

<div class="faq-content">

  <div class="faq-question">
    <input id="q1" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label  for="q1" class="panel-title" style={{textAlign:'left' , marginLeft:11 ,marginBottom:1,paddingTop:5}  }>What are your visiting hours?</label>
    <div class="panel-content">Our visiting hours are from 10:00 AM to 8:00 PM every day of the week.</div>
  </div>
  
  <div class="faq-question">
    <input id="q2" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label className='yod' for="q2" class="panel-title" style={{textAlign:'left' , marginLeft:11 ,marginBottom:1,paddingTop:5}  }>Do I need an appointment for consultations?</label>
    <div class="panel-content">Yes, it is recommended to schedule an appointment for consultations to ensure timely and efficient service.</div>
  </div>
  
  <div class="faq-question">
    <input id="q3" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label className='yod' for="q3" class="panel-title" style={{textAlign:'left' , marginLeft:11 ,marginBottom:1,paddingTop:5}  }>What insurance plans do you accept?</label>
    <div class="panel-content">We accept a wide range of insurance plans. Please contact our billing department for specific details regarding your insurance coverage.</div>
  </div>

  <div class="faq-question">
    <input id="q4" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label className='yod' for="q4" class="panel-title" style={{textAlign:'left' , marginLeft:11 ,marginBottom:1,paddingTop:5}  }>Are there parking facilities available?</label>
    <div class="panel-content">Yes, we have dedicated parking facilities for patients and visitors. Please follow the signage to locate the parking area.</div>
  </div>

  <div class="faq-question">
    <input id="q5" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label className='yod' for="q5" class="panel-title" style={{textAlign:'left' , marginLeft:11 ,marginBottom:1,paddingTop:5}  }>What should I bring for my hospital stay?</label>
    <div class="panel-content">It is advised to bring your identification documents, insurance information, any relevant medical records, and personal toiletries for your hospital stay.</div>
  </div>
</div>
    </>
  );
}

export default CustomerService;