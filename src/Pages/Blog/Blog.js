import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 mb-5'>WELCOME TO MY BLOG</h1>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        01. Difference between authorization and authentication.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Authentication :</strong> Authentication is a process of identifying someone or something is, in fact, or what it says it is. It Provides access to the real account holder. If unrecognized people or something want access, it will be impossible. <br/>
        <strong>Authorization :</strong> It is a function of specify to access rights to resources, which is related to general information security, and to access in particular. Authorization provides security and authentication just check your info which you provide before.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      02. Why are you using firebase? What other options do you have to implement authentication?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>I use Google Firebase.</strong>Because, Google Firebase gives us many others features to easily handle authentication and authorized after completed site. 
        <strong>Other options to implement authentication : </strong> React router hook, Back4App, Parse, AWS Amplify,Backendless etc.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        03. What other services does firebase provide other than authentication
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>There are many services which GOOGLE FIREBASE provide.</strong> 1. Cloud Firestore, 2. Cloud Functions, 3. Hosting, 4. Cloud, 5. Google Analysis, 6, Predictions, 7. Cloud Messaging, 8. Dynamic Links and 9. Remote Config.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;