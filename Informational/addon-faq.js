// const faqDivs = document.querySelectorAll(".addon-faq");
// const icons = document.querySelectorAll(".addon-faq-toggle");

// function toggleAnswer() {
//     const itemToggle = this.parentElement.classList.contains('active');

//     for (i = 0; i < questions.length; i++) {
//         questions[i].parentElement.classList.remove('active');
//     }

//     if (itemToggle == false) {
//         this.parentElement.classList.add('active');
//     }
// }

// function toggleFaq() {
//     const itemToggle = this.classList.contains('active');

//     for (i = 0; i < faqDivs.length; i++) {
//         faqDivs[i].classList.remove('active');
//     }

//     if (itemToggle == false) {
//         this.classList.add('active');
//     }
// }

// icons.forEach(icon => icon.addEventListener('click', toggleAnswer));
// faqDivs.forEach(faq => faq.addEventListener('click', toggleFaq));


// * vue starts - 1
$scope.faqs = $ref([
    {
      question: "1. When will my plants be delivered ?",
      answer: "We offer fastest delivery in Live Plants category. However, due to any unforeseen events or circumstances, the delivery can get delayed. We will inform you regarding the same. But we assure you that we keep your lovely plants safe and healthy and they will be worth the wait .",
      active: true
    },
    {
      question: "2. My order was due for delivery yesterday, but I have still not received it ?",
      answer: "Kindly drop us an email on support@paudhewale.com with your order details so we can look into it.",
      active: false
    },
    {
      question: "3. Can I place an order on call ?",
      answer: "To ensure a smooth order experience, we do not offer on call order option. You can checkout our website and order your favorite products after looking at the pictures and the description.",
      active: false
    },
    {
      question: "4. What is the Return and Replacement Policy ?",
      answer: "We at PaudheWale keep customer satisfaction and best quality delivery as our topmost priorities. We offer a two day window for replacement. In case you receive wrong products, or damaged products, kindly drop in an email to support@paudhewale.com",
      active: false
    },
    {
      question: "5. What are your delivery charges ?",
      answer: "We are pleased to offer free delivery for orders exceeding Rs 499. This ensures that you can enjoy complimentary shipping on purchases above this threshold.",
      active: false
    },
    {
      question: "6. Does PaudheWale offers Cash On Delivery (COD)? Can I pay on delivery ?",
      answer: "To ensure the well-being of our plants, we no longer offer Cash on Delivery (COD) for deliveries. This decision aims to prevent delays and uncertainties that may impact the plant's condition. We provide secure online payment options for a seamless and timely experience.",
      active: false
    },
    {
      question: "7. How can I change the delivery address / I entered incomplete delivery address ?",
      answer: "Kindly drop an email to support@paudhewale.com with your order number and your complete / updated delivery address.",
      active: false
    }
  ]);
  
  
  $scope.initToggle = function(){
      $scope.faqDivs = document.querySelectorAll(".addon-faq");
      $scope.icons = document.querySelectorAll(".addon-faq-toggle");
  
      $scope.icons.forEach(icon => icon.addEventListener('click', toggleAnswer));
      $scope.faqDivs.forEach(faq => faq.addEventListener('click', toggleFaq));
  };
  
  function toggleAnswer() {
      const itemToggle = this.parentElement.classList.contains('active');
  
      for (i = 0; i < questions.length; i++) {
          questions[i].parentElement.classList.remove('active');
      };
  
      if (itemToggle == false) {
          this.parentElement.classList.add('active');
      };
  };
  
  function toggleFaq() {
      const itemToggle = this.classList.contains('active');
  
      for (i = 0; i < $scope.faqDivs.length; i++) {
          $scope.faqDivs[i].classList.remove('active');
      };
  
      if (itemToggle == false) {
          this.classList.add('active');
      };
  };
  
  setTimeout($scope.initToggle, 1100);

// *  vue ends - 1
  
// * vue starts - 2
    // the $scope.faqs will be same as way 1
  
  // $scope.toggleFaq = function(index) {
  //   $scope.faqs[index].active = !$scope.faqs[index].active;
  //   $scope.faqs.forEach((faq, i) => {
  //     if (i !== index) {
  //       faq.active = false;
  //     }
  //   });
  // };
  
// * vue ends - 2