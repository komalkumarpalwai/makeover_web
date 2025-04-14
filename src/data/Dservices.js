

const categorizedServices = {
    ' Male Hair Treatment ': [
      { title: 'smoothing', description: 'Neat trimming of split ends', price: '₹3999.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
      { title: 'keratin', description: 'Add volume with layers', price: '₹2999.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' }, 
      { title: 'botox', description: 'Neat trimming of split ends', price: '₹4999.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
     
    ],
    ' Female Hair Treatment ': [
      { title: 'smoothing', description: 'Neat trimming of split ends', price: '₹3999.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
      { title: 'rebounding', description: 'Neat trimming of split ends', price: '₹5999.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
      { title: 'keratin', description: 'Add volume with layers', price: '₹5000.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' }, 
      { title: 'botox', description: 'Neat trimming of split ends', price: '₹6999.00', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
     
    ],
    'Bridal': [
      { title: 'Normal bridal package', description: '03+ diamond facial,full body wax, body bleach', price: '₹20000', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
      { title: 'Medium Bridal Package', description: '03+ diamond facial,03+ tan 2 times,full body wax, body bleach & more', price: '₹32,800', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' },
      { title: 'advanced Bridal Package', description: 'All the makeover services', price: '₹50,800', image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85' }
    ],
    'Leg Wax': [
      {
        title: 'Honey Half Legs Wax',
        description: 'Gentle waxing for half legs using honey formula',
        price: '₹500.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Honey Full Legs Wax',
        description: 'Complete leg waxing with honey formula',
        price: '₹800.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Rica Half Legs Wax',
        description: 'Premium waxing for half legs with Rica formula',
        price: '₹800.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Rica Full Legs Wax',
        description: 'Premium complete leg waxing with Rica formula',
        price: '₹1100.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Chocolate Half Legs Wax',
        description: 'Smooth waxing for half legs with chocolate formula',
        price: '₹600.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Chocolate Full Legs Wax',
        description: 'Complete leg waxing with chocolate formula',
        price: '₹900.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Milk Half Legs Wax',
        description: 'Gentle waxing for half legs with milk formula',
        price: '₹600.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Milk Full Legs Wax',
        description: 'Complete leg waxing with milk formula',
        price: '₹900.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Gold Half Legs Wax',
        description: 'Premium gold waxing for half legs',
        price: '₹1000.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Gold Full Legs Wax',
        description: 'Premium complete gold waxing for legs',
        price: '₹1500.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      }
    ],
    'Full Body Treatments': [
      {
        title: 'Honey Full Body Wax',
        description: 'Complete body waxing with honey formula',
        price: '₹2000.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Rica Full Body Wax',
        description: 'Premium complete body waxing with Rica formula',
        price: '₹3200.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Full Body Polishing',
        description: 'Full body exfoliation and rejuvenation',
        price: '₹3000.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Full Body Bleach',
        description: 'Complete body bleaching treatment',
        price: '₹2000.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      }
    ],
  
    'Party & Engagement Makeup': [
      {
        title: 'Normal Makeup',
        description: 'Includes hair styling and saree draping',
        price: '₹2000',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Side Makeup',
        description: 'Side-focused glam with styling',
        price: '₹3000',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'HD Makeup',
        description: 'High definition makeup with full styling',
        price: '₹4000',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Air Brush Makeup',
        description: 'Smooth airbrush finish with styling and draping',
        price: '₹5000',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      }
    ],
    
    'Male Hair Cut and Spa': [
      {
        title: 'Keratin Spa',
        description: 'Frizz-free hair treatment',
        price: '₹2000',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'L’Oreal Inova',
        description: 'Premium hair treatment for smoothness',
        price: '₹1299',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Normal Shampoo Treatment',
        description: 'Basic hair treatment with normal shampoo',
        price: '₹600',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Matrix Treatment',
        description: 'Deep conditioning with Matrix products',
        price: '₹699',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Schwarzkopf Treatment',
        description: 'Hair treatment using Schwarzkopf products',
        price: '₹800',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'L’Oreal Anti-Dandruff Treatment',
        description: 'Hair spa treatment for dandruff control',
        price: '₹1399',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Dry and Damage Repair',
        description: 'Repair for dry and damaged hair',
        price: '₹1099',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'L’Oreal Majiral',
        description: 'High-end treatment with L’Oreal Majiral products',
        price: '₹899',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Highlights (200 Stripes)',
        description: 'Hair highlights with up to 200 stripes',
        price: '₹2000',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Beard Color',
        description: 'Coloring for beard with L’Oreal Inova',
        price: '₹650',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'L’Oreal Majiral Beard Color',
        description: 'Premium beard color with L’Oreal Majiral',
        price: '₹550',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Matrix Beard Color',
        description: 'Beard color treatment with Matrix products',
        price: '₹450',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      }
    ],'Female Hair Cut and Cleanup': [
      {
        title: 'Hair Wash',
        description: 'Basic hair wash treatment',
        price: '₹200.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Hair Cut',
        description: 'Regular hair cut for women',
        price: '₹700.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Baby Cut',
        description: 'Cute haircuts for kids',
        price: '₹350.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Blow Dryer',
        description: 'Hair styling with blow dryer',
        price: '₹500.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Temporary Hair Straightening',
        description: 'Temporary straightening for smooth hair',
        price: '₹600.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Rose Clean Up',
        description: 'Facial cleanup with rose-based products',
        price: '₹350.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'VLCC Clean Up',
        description: 'Clean up using VLCC products',
        price: '₹749.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Gold Clean Up',
        description: 'Gold-based facial cleanup treatment',
        price: '₹749.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Skin Whitening Clean Up',
        description: 'Whitening skin cleanup treatment',
        price: '₹749.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Lotus Clean Up',
        description: 'Clean up using Lotus products',
        price: '₹849.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Shahnaz Clean Up',
        description: 'Clean up with Shahnaz products',
        price: '₹849.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Diamond Clean Up',
        description: 'Diamond facial cleanup for glowing skin',
        price: '₹949.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'O3+ Normal Clean Up',
        description: 'Normal O3+ facial cleanup treatment',
        price: '₹999.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'O3+ Diamond Clean Up',
        description: 'Diamond O3+ cleanup for bright skin',
        price: '₹1999.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Casmara Clean Up',
        description: 'Premium Casmara cleanup treatment',
        price: '₹2249.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'D Tan (or) Bleach',
        description: 'Skin tanning removal or bleach treatment',
        price: '₹300.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Raga D Tan',
        description: 'Raga D Tan treatment for smooth skin',
        price: '₹300.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Ozone D Tan',
        description: 'Ozone D Tan treatment for glowing skin',
        price: '₹400.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Sara D Tan',
        description: 'Sara D Tan facial treatment',
        price: '₹500.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'O3+ D Tan',
        description: 'O3+ D Tan treatment for an even skin tone',
        price: '₹600.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Oliva Bleach',
        description: 'Bleaching treatment with Oliva products',
        price: '₹300.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Gold Naturs Bleach',
        description: 'Gold bleaching treatment for skin lightening',
        price: '₹500.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Oxy Bleach',
        description: 'Oxy bleach treatment for glowing skin',
        price: '₹400.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'O3+ Bleach',
        description: 'O3+ bleaching treatment for a radiant glow',
        price: '₹600.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      }
    ],  'Regular Services': [
      {
        title: 'Eyebrows',
        description: 'Shaping and trimming of eyebrows',
        price: '₹30.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Forehead Wax',
        description: 'Waxing treatment for forehead area',
        price: '₹30.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Upper Lip',
        description: 'Hair removal for upper lip area',
        price: '₹50.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Chin Wax',
        description: 'Chin hair removal with waxing',
        price: '₹30.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Side Locks Wax',
        description: 'Waxing for sideburns/side locks area',
        price: '₹50.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Underarms Wax',
        description: 'Smooth underarms with waxing',
        price: '₹80.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Cheeks Wax',
        description: 'Waxing treatment for cheeks',
        price: '₹100.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Full Face Wax',
        description: 'Complete facial waxing for a clean look',
        price: '₹250.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Face Wax (Upper Lip)',
        description: 'Upper lip waxing service',
        price: '₹50.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Face Wax (Side Locks)',
        description: 'Side locks waxing service',
        price: '₹50.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Face Wax (Underarms)',
        description: 'Underarm hair removal via wax',
        price: '₹80.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Oil Head Massage (Normal)',
        description: 'Relaxing head massage with regular oil',
        price: '₹550.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Oil Head Massage (Olive)',
        description: 'Nourishing olive oil head massage',
        price: '₹650.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Pedicure',
        description: 'Relaxing foot spa and nail care treatment',
        price: '₹999.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      },
      {
        title: 'Manicure',
        description: 'Hand and nail grooming with massage',
        price: '₹699.00',
        image: 'https://lh3.googleusercontent.com/34erucZzOokdo1IKsdUzkXFoUi1XEBa9G0aHDDMvWVe8tNabbkOesesud-fPEqGP7BUqELY=s85'
      }
    ]
  };
  export default categorizedServices;