

const categorizedServices = {
    ' Male Hair Treatment ': [
      { title: 'smoothing', description: 'Neat trimming of split ends', price: '₹3999.00', image: 'https://pauledmonds.com/cdn/shop/files/Website_images_1200x1200px_Men_s_hair_straightening_800x.jpg?v=1653582460' },
      { title: 'keratin', description: 'Add volume with layers', price: '₹2999.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6UONd-lAm96oByJNTZfRzzaIqy4vG_YVrzLu_TIxuydUDOj2CTvMqlWkV2WCuxYkSFM&usqp=CAU' }, 
      { title: 'botox', description: 'Neat trimming of split ends', price: '₹4999.00', image: 'https://media.istockphoto.com/id/1282976214/photo/hair-mesotherapy-or-scalp-prp-platelet-rich-plasma-procedure-beautician-doctor-makes.jpg?s=612x612&w=0&k=20&c=NpqpVpad9lTsSGjqpj2p56i98EAorsyor50Y8r-rjyQ=' },
     
    ],
    ' Female Hair Treatment ': [
      { title: 'smoothing', description: 'Neat trimming of split ends', price: '₹3999.00', image: 'https://media.istockphoto.com/id/1409084667/photo/brown-hair-beauty-woman-brunette-model-with-shiny-straight-long-hairstyle-hair-care-spa-and.jpg?s=612x612&w=0&k=20&c=c_vyH9DrR72FJJRH55LA2NuMVNMaz7fmOGHVbq6J6fE=' },
      { title: 'rebounding', description: 'Neat trimming of split ends', price: '₹5999.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCjHrZpvdioKPLalam8rG2XF8TZc3gWOhkw&s' },
      { title: 'keratin', description: 'Add volume with layers', price: '₹5000.00', image: 'https://media.istockphoto.com/id/2042303174/photo/before-and-after-the-straightening-procedure-with-keratin-botox-or-brazilian-special.jpg?s=612x612&w=0&k=20&c=1bgHAsk4o22JWWKI_PrFSGdw3_DVB-9RbfLf9-r4-o8=' }, 
      { title: 'botox', description: 'Neat trimming of split ends', price: '₹6999.00', image: 'https://media.istockphoto.com/id/1409471094/photo/modern-woman-receives-botulinum-toxin-injections-in-a-cosmetology-clinic.jpg?s=612x612&w=0&k=20&c=yAb7Ez3rYxuQSNAOCSOmpad0jUI7NphS7JoTlV6oQ4Y=' },
     
    ],
    'Bridal': [
      { title: 'Normal bridal package', description: '03+ diamond facial,full body wax, body bleach', price: '₹20000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3rcmWysVMg949rrhM4-SVe7pe59g1BPbuA&s' },
      { title: 'Medium Bridal Package', description: '03+ diamond facial,03+ tan 2 times,full body wax, body bleach & more', price: '₹32,800', image: 'https://images.pexels.com/photos/14826512/pexels-photo-14826512.jpeg?cs=srgb&dl=pexels-rani-sahu-14826512.jpg&fm=jpg' },
      { title: 'advanced Bridal Package', description: 'All the makeover services', price: '₹50,800', image: 'https://manoharamskinclinic.com/wp-content/uploads/2021/11/manoharam-skin-clinic-treatments-bridal-makeover-image.png' }
    ],
    'Leg Wax': [
      {
        title: 'Honey Half Legs Wax',
        description: 'Gentle waxing for half legs using honey formula',
        price: '₹500.00',
        image: 'https://www.shutterstock.com/image-photo/hot-wax-legs-woman-bathroom-600nw-2479156777.jpg'
      },
      {
        title: 'Honey Full Legs Wax',
        description: 'Complete leg waxing with honey formula',
        price: '₹800.00',
        image: 'https://media.istockphoto.com/id/1208759286/photo/young-caucasian-girl-having-epilation-procedures-with-sugar-at-spa-salon.jpg?s=612x612&w=0&k=20&c=QJYZI8P1_ORSf7T2qj62ka_NKDsFJkITFyrr7s9yURg='
      },
      {
        title: 'Rica Half Legs Wax',
        description: 'Premium waxing for half legs with Rica formula',
        price: '₹800.00',
        image: 'https://sumansalon.in/wp-content/uploads/2024/02/5475-2022-11-16.jpg.webp'
      },
      {
        title: 'Rica Full Legs Wax',
        description: 'Premium complete leg waxing with Rica formula',
        price: '₹1100.00',
        image: 'https://kykro.com/wp-content/uploads/2024/10/kykro-rica-wax-full-legs.webp'
      },
      {
        title: 'Chocolate Half Legs Wax',
        description: 'Smooth waxing for half legs with chocolate formula',
        price: '₹600.00',
        image: 'https://sumansalon.in/wp-content/uploads/2024/02/Heres-why-you-should-opt-for-chocolate_MobileHomeFeature.jpg'
      },
      {
        title: 'Chocolate Full Legs Wax',
        description: 'Complete leg waxing with chocolate formula',
        price: '₹900.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZyfGKqys6oAlej4PEi8w1P39J2UZ1jrA-A&s'
      },
      {
        title: 'Milk Half Legs Wax',
        description: 'Gentle waxing for half legs with milk formula',
        price: '₹600.00',
        image: 'https://sumansalon.in/wp-content/uploads/2024/02/half-leg.png.webp'
      },
      {
        title: 'Milk Full Legs Wax',
        description: 'Complete leg waxing with milk formula',
        price: '₹900.00',
        image: 'https://media.istockphoto.com/id/95489572/photo/waxing.jpg?s=612x612&w=0&k=20&c=7i0Zuj3rGpIXuQo-926MSAOp7pl0EFLSKibx01XtLFg='
      },
      {
        title: 'Gold Half Legs Wax',
        description: 'Premium gold waxing for half legs',
        price: '₹1000.00',
        image: 'https://s3.ap-south-1.amazonaws.com/getlook.in/services/half_leg_rica_wax.jpg'
      },
      {
        title: 'Gold Full Legs Wax',
        description: 'Premium complete gold waxing for legs',
        price: '₹1500.00',
        image: 'https://media.istockphoto.com/id/1220348340/photo/golden-wax-pouring-onto-womans-leg-from-wooden-spatula-stock-photo.jpg?s=612x612&w=0&k=20&c=slHaixKhMw8RTRvI3dPrGTKpYTdvehF_wPZB8oDOBmg='
      }
    ],
    'Full Body Treatments': [
      {
        title: 'Honey Full Body Wax',
        description: 'Complete body waxing with honey formula',
        price: '₹2000.00',
        image: 'https://naomisheadmasters.com/wp-content/uploads/2023/06/Full-Body-Waxing-Prices-In-Chandigarh.webp'
      },
      {
        title: 'Rica Full Body Wax',
        description: 'Premium complete body waxing with Rica formula',
        price: '₹3200.00',
        image: 'https://sumansalon.in/wp-content/uploads/2024/02/shutterstock_377324134-scaled-1.jpg'
      },
      {
        title: 'Full Body Polishing',
        description: 'Full body exfoliation and rejuvenation',
        price: '₹3000.00',
        image: 'https://t4.ftcdn.net/jpg/00/85/18/67/360_F_85186772_vpCQRhkLE5gukokTigkOBjr4Sdeu4m2p.jpg'
      },
      {
        title: 'Full Body Bleach',
        description: 'Complete body bleaching treatment',
        price: '₹2000.00',
        image: 'https://www.personasalon.co.in/wp-content/uploads/2020/05/full-body-bleach.jpg'
      }
    ],
  
    'Party & Engagement Makeup': [
      {
        title: 'Normal Makeup',
        description: 'Includes hair styling and saree draping',
        price: '₹2000',
        image: 'https://cdn0.weddingwire.in/article/2316/3_2/960/jpg/26132-hd-makeup-hari-photo-lead-image.jpeg'
      },
      {
        title: 'Side Makeup',
        description: 'Side-focused glam with styling',
        price: '₹3000',
        image: 'https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA='
      },
      {
        title: 'HD Makeup',
        description: 'High definition makeup with full styling',
        price: '₹4000',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZ9QMD5pzAJrIIzdTvwjPd0k00gX33we5UA&s'
      },
      {
        title: 'Air Brush Makeup',
        description: 'Smooth airbrush finish with styling and draping',
        price: '₹5000',
        image: 'https://media.istockphoto.com/id/898396992/photo/makeup-artist-using-airbrusher.jpg?s=612x612&w=0&k=20&c=Hy32Y737AH2m9GYDizUbDODoCw4NE3j6gyqxkAvLWAg='
      }
    ],
    
    'Male Hair Cut and Spa': [
      {
        title: 'Keratin Spa',
        description: 'Frizz-free hair treatment',
        price: '₹2000',
        image: 'https://media.istockphoto.com/id/469758106/photo/man-at-the-hairdresser-washing-his-hair.jpg?s=612x612&w=0&k=20&c=BROlsi1A5kwlTEYZozrbQGYrYH62SGFu2okxREWBy4Q='
      },
      {
        title: 'L’Oreal Inova',
        description: 'Premium hair treatment for smoothness',
        price: '₹1299',
        image: 'https://www.allurecosmetics.in/cdn/shop/products/image_3_42785417-0981-41ef-a978-cd63d9072b3c.jpg?v=1681206496'
      },
      {
        title: 'Normal Shampoo Treatment',
        description: 'Basic hair treatment with normal shampoo',
        price: '₹600',
        image: 'https://media.istockphoto.com/id/899312480/photo/at-the-hairdresser-washing-hair.jpg?s=612x612&w=0&k=20&c=pMOTSjLnZND0eRDkGJ_AkUekoyuG-JGMiDe0fBs-ems='
      },
      {
        title: 'Matrix Treatment',
        description: 'Deep conditioning with Matrix products',
        price: '₹699',
        image: 'https://www.shutterstock.com/shutterstock/videos/3460286993/thumb/1.jpg?ip=x480'
      },
      {
        title: 'Schwarzkopf Treatment',
        description: 'Hair treatment using Schwarzkopf products',
        price: '₹800',
        image: 'https://thumbs.dreamstime.com/b/logo-hair-care-company-schwarzkopf-samsung-tablet-holded-arab-muslim-man-schwarzkopf-logo-100228452.jpg'
      },
      {
        title: 'L’Oreal Anti-Dandruff Treatment',
        description: 'Hair spa treatment for dandruff control',
        price: '₹1399',
        image: 'https://www.lorealprofessionnel.com/-/media/project/loreal/brand-sites/lp/emea/inter/hair-care/scalp-advanced/pdp/anti-dandruff-dermo-clarifier-shampoo/3-slider.jpg?rev=a86a74bd0af444e5af9c0945b5b5270d&cx=0.53&cy=0.58&cw=1920&ch=1920&hash=2D01FDE06D41407D4C65FA6D849910BB'
      },
      {
        title: 'Dry and Damage Repair',
        description: 'Repair for dry and damaged hair',
        price: '₹1099',
        image: 'https://static1.squarespace.com/static/583c809359cc68a8c3c530c9/59eea9f880bd5e36ab32109f/6528dcdaa85d960ae5d56502/1697885254523/Damaged+Hair+for+Men.jpg?format=1500w'
      },
      {
        title: 'L’Oreal Majiral',
        description: 'High-end treatment with L’Oreal Majiral products',
        price: '₹899',
        image: 'https://i.pinimg.com/736x/96/e7/2d/96e72d180697ba9083a00d1e64639282.jpg'
      },
      {
        title: 'Highlights (200 Stripes)',
        description: 'Hair highlights with up to 200 stripes',
        price: '₹2000',
        image: 'https://i.pinimg.com/736x/be/b8/61/beb861e316c8b776790cf98359938c48.jpg'
      },
      {
        title: 'Beard Color',
        description: 'Coloring for beard with L’Oreal Inova',
        price: '₹650',
        image: 'https://media.istockphoto.com/id/934141698/photo/the-barber-paints-the-beard-and-the-mustache-of-the-young-man.jpg?s=612x612&w=0&k=20&c=_YM6g6NCF5B98GNzDNMXH8HOVD-rzcynUVEggRaMXo0='
      },
      {
        title: 'L’Oreal Majiral Beard Color',
        description: 'Premium beard color with L’Oreal Majiral',
        price: '₹550',
        image: 'https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/2023/12-december/12-11/men-expert-instant-beard-color/men-expert-instant-beard-color-for-men.jpg?cx=0.52&cy=0.53&cw=2000&ch=815&hash=8D6794EEC14C1151B6187901C7648022'
      },
      {
        title: 'Matrix Beard Color',
        description: 'Beard color treatment with Matrix products',
        price: '₹450',
        image: 'https://planetstore.in/public/uploads/all/1PvPfTfZJojbGkmCVuo8vfyiP7DNhne5GXZAtw4c.jpg'
      }
    ],'Female Hair Cut and Cleanup': [
      {
        title: 'Hair Wash',
        description: 'Basic hair wash treatment',
        price: '₹200.00',
        image: 'https://st5.depositphotos.com/34337456/62449/v/600/depositphotos_624492940-stock-video-beautiful-young-caucasian-girl-hairdresser.jpg'
      },
      {
        title: 'Hair Cut',
        description: 'Regular hair cut for women',
        price: '₹700.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9JYMF9NEVJ0Dx7sBu5U-KIXq6UIIFfc1XWCt-1gPz416nKaz05wyxVRNspK7HTvULjvs&usqp=CAU'
      },
      {
        title: 'Baby Cut',
        description: 'Cute haircuts for kids',
        price: '₹350.00',
        image: 'https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.jpg?s=612x612&w=0&k=20&c=3dO_HWS8WvSGNbGmxTsqK70vZMGqM2REnbVJG09YnmI='
      },
      {
        title: 'Blow Dryer',
        description: 'Hair styling with blow dryer',
        price: '₹500.00',
        image: 'https://media.istockphoto.com/id/1375289263/photo/studio-shot-of-an-attractive-young-woman-surrounded-by-hairstyling-products-against-a-grey.jpg?s=612x612&w=0&k=20&c=v20YctPbpYwlukduJ3ur4gtZCzLHQNRTa63QLZ_I-o0='
      },
      {
        title: 'Temporary Hair Straightening',
        description: 'Temporary straightening for smooth hair',
        price: '₹600.00',
        image: 'https://img.freepik.com/free-photo/young-woman-getting-her-hair-curled-by-stylist-parlor-beautiful-young-hairdresser-giving-new-haircut-female-saloon_231208-10920.jpg'
      },
      {
        title: 'Rose Clean Up',
        description: 'Facial cleanup with rose-based products',
        price: '₹350.00',
        image: 'https://m.media-amazon.com/images/I/81Jcnv3j4ML._AC_UF350,350_QL80_DpWeblab_.jpg'
      },
      {
        title: 'VLCC Clean Up',
        description: 'Clean up using VLCC products',
        price: '₹749.00',
        image: 'https://rukminim3.flixcart.com/image/850/1250/xif0q/facial-kit/k/z/a/-original-imagruygwzan4gta.jpeg?q=90&crop=false'
      },
      {
        title: 'Gold Clean Up',
        description: 'Gold-based facial cleanup treatment',
        price: '₹749.00',
        image: 'https://media.gettyimages.com/id/1379165936/video/clean-make-up-brush-on-shiny-background-studio-shot-close-up.jpg?s=640x640&k=20&c=8QecXGqDdeablA3GW1caf78OP_gklBEyjLb8W2tBdJY='
      },
      {
        title: 'Skin Whitening Clean Up',
        description: 'Whitening skin cleanup treatment',
        price: '₹749.00',
        image: 'https://www.shutterstock.com/shutterstock/videos/3687767321/thumb/1.jpg?ip=x480'
      },
      {
        title: 'Lotus Clean Up',
        description: 'Clean up using Lotus products',
        price: '₹849.00',
        image: 'https://lotus-professional.com/cdn/shop/files/basic_cleanup3.png?v=1664262700'
      },
      {
        title: 'Shahnaz Clean Up',
        description: 'Clean up with Shahnaz products',
        price: '₹849.00',
        image: 'https://content.jdmagicbox.com/comp/kolkata/f1/033pxx33.xx33.150715171641.w6f1/catalogue/shahnaz-husain-signature-salon-bidhan-nagar-kolkata-beauty-salons-oi6jt.jpg'
      },
      {
        title: 'Diamond Clean Up',
        description: 'Diamond facial cleanup for glowing skin',
        price: '₹949.00',
        image: 'https://media.istockphoto.com/id/803164436/photo/charming-lady-is-getting-cosmetic-treatment-in-spa.jpg?s=612x612&w=0&k=20&c=vEGWETU_R94F62a_SLgu1Mlj5trAX_icjl3ndPUAQiw='
      },
      {
        title: 'O3+ Normal Clean Up',
        description: 'Normal O3+ facial cleanup treatment',
        price: '₹999.00',
        image: 'https://img.freepik.com/free-photo/female-artist-applying-make-up-model_23-2148398671.jpg'
      },
      {
        title: 'O3+ Diamond Clean Up',
        description: 'Diamond O3+ cleanup for bright skin',
        price: '₹1999.00',
        image: 'https://www.o3plus.com/cdn/shop/articles/Diamond_Facial_Kit_for_Winter_Skincare.png?v=1704799579'
      },
      {
        title: 'Casmara Clean Up',
        description: 'Premium Casmara cleanup treatment',
        price: '₹2249.00',
        image: 'https://www.isheetaguptamakeupstudio.com/uploaded-files/category/images/thumbs/O3-Facial-thumbs-500X500.jpg'
      },
      {
        title: 'D Tan (or) Bleach',
        description: 'Skin tanning removal or bleach treatment',
        price: '₹300.00',
        image: 'https://3.imimg.com/data3/YV/XR/MY-9356574/20-500x500.jpg'
      },
      {
        title: 'Raga D Tan',
        description: 'Raga D Tan treatment for smooth skin',
        price: '₹300.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-Xia43mBqayFDXJA-3B5alTvpm2iu2lHvg&s'
      },
      {
        title: 'Ozone D Tan',
        description: 'Ozone D Tan treatment for glowing skin',
        price: '₹400.00',
        image: 'https://www.ozoneayurvedics.com/cdn/shop/files/D_tan_ritual_combo_main.jpg?v=1718257044'
      },
      {
        title: 'Sara D Tan',
        description: 'Sara D Tan facial treatment',
        price: '₹500.00',
        image: 'https://sarabeauty.in/cdn/shop/products/175-oxy-d-tan-mask-with-d-tan-manicure-pedicure-kit-cream-sara-original-imaghcued4xwe9rh_31c78794-6d20-4f60-92d7-d54c9ce1f746_1200x1200.jpg?v=1673355021'
      },
      {
        title: 'O3+ D Tan',
        description: 'O3+ D Tan treatment for an even skin tone',
        price: '₹600.00',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-Xia43mBqayFDXJA-3B5alTvpm2iu2lHvg&ss'
      },
      {
        title: 'Oliva Bleach',
        description: 'Bleaching treatment with Oliva products',
        price: '₹300.00',
        image: 'https://images.stockcake.com/public/3/9/1/391c615b-1d3e-4cae-a5fd-c24533a33a68_large/choosing-makeup-shades-stockcake.jpg'
      },
      {
        title: 'Gold Naturs Bleach',
        description: 'Gold bleaching treatment for skin lightening',
        price: '₹500.00',
        image: 'https://media.istockphoto.com/id/1065043866/photo/woman-with-golden-peel-off-mask.jpg?s=612x612&w=0&k=20&c=W0ZHT5mp_W8ILR0ADBPtyDP2gO15iXk1cpXMhLMcO7k='
      },
      {
        title: 'Oxy Bleach',
        description: 'Oxy bleach treatment for glowing skin',
        price: '₹400.00',
        image: 'https://media.istockphoto.com/id/1340302535/photo/beautiful-indian-woman-getting-ready-to-a-wedding-reception-at-the-beauty-parlor.jpg?s=612x612&w=0&k=20&c=GzhivtaqLIDXBQ69R0DlIOfwY4aOYUI67gxWKTM3ooA='
      },
      {
        title: 'O3+ Bleach',
        description: 'O3+ bleaching treatment for a radiant glow',
        price: '₹600.00',
        image: 'https://browsandlips.ae/wp-content/uploads/2023/10/Skin-Brightening-Facial.webp'
      }
    ], 
     'Regular Services':
      [
      {
        title: "Eyebrows",
        description: "Shaping and trimming of eyebrows",
        price: "₹30.00",
        image: "https://thebrowfixx.com/wp-content/uploads/2023/09/eyebrow-waxing-to-shape-brows-1.jpg"
      },
      {
        title: "Forehead Wax",
        description: "Waxing treatment for forehead area",
        price: "₹30.00",
        image: "https://i.pinimg.com/736x/9b/3b/1f/9b3b1f1bed1a9eb4c2cb0ffcda39fb77.jpg"
      },
      {
        title: "Upper Lip",
        description: "Hair removal for upper lip area",
        price: "₹50.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdL3Gt2jZ8f001kOlnfHF1uxvpt2ipbBP7cw&s"
      },
      {
        title: "Chin Wax",
        description: "Chin hair removal with waxing",
        price: "₹30.00",
        image: "https://img.mobilestyles.com/images/blog_posts/1937/in_content/16974827844361.jpeg"
      },
      {
        title: "Side Locks Wax",
        description: "Waxing for sideburns/side locks area",
        price: "₹50.00",
        image: "https://i.ytimg.com/vi/vAKTtAuWE8s/maxresdefault.jpg"
      },
      {
        title: "Underarms Wax",
        description: "Smooth underarms with waxing",
        price: "₹80.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHw6q8T090aHIG5CaveuDSmfMB3TV3-nClQ&s"
      },
      {
        title: "Cheeks Wax",
        description: "Waxing treatment for cheeks",
        price: "₹100.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZro6UYhswIlpFgvnl7qEQ1hyWPf_2LXLMI_fWydt-oPnXcCrTCQbVDZSEHgj4KKmHwI&usqp=CAU"
      },
      {
        title: "Full Face Wax",
        description: "Complete facial waxing for a clean look",
        price: "₹250.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCEqNPwooVO9PikmzzsPDW_mBaUWhKArWIw&s"
      },
            {
        title: "Oil Head Massage (Normal)",
        description: "Relaxing head massage with regular oil",
        price: "₹550.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpghPIy79lhAzdP2wc44PdzIxorvdIVDXF_rfPUv2Ol-tdhysgtCehhQI7c4aspHlwVY&usqp=CAU"
      },
     
      {
        title: "Pedicure",
        description: "Relaxing foot spa and nail care treatment",
        price: "₹999.00",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGi-lZAdskeokhBnl_G9jr-PMkSjx5YZsi8A&s"
      },
      {
        title: "Manicure",
        description: "Hand and nail grooming with massage",
        price: "₹699.00",
        image: "https://rukminim2.flixcart.com/image/850/1000/kt0enww0/nail-polish/5/r/7/15-gel-nail-paint-for-women-and-girls-way-to-mauve-makeover-original-imag6gfda5e6jh5z.jpeg?q=90&crop=false"
      }
    ]
  };
  export default categorizedServices;
