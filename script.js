const carCompaniesInfo = {
    "toyota": "A Japanese multinational automotive manufacturer, Toyota is one of the largest car makers in the world. Known for reliable and fuel-efficient vehicles, Toyota's popular models include the Corolla, Camry, and the Prius, which is one of the best-selling hybrid cars. The company is also a pioneer in hydrogen fuel cell technology with its Mirai model.",
    "ford": "An American automaker founded by Henry Ford in 1903, Ford revolutionized the auto industry with assembly line production. Ford's iconic models include the Mustang, F-150, and the Explorer. The company is heavily invested in electric vehicle (EV) development, with the Mustang Mach-E being a prominent entry.",
    "honda": "Honda is a Japanese company recognized for producing a wide range of vehicles, from motorcycles to cars. The Civic and Accord are among Honda’s best-selling models globally. Honda is also a leader in fuel efficiency and has a strong presence in the hybrid and electric vehicle markets.",
    "chevrolet": "Chevrolet, commonly known as Chevy, is an American car brand under General Motors (GM). It offers a wide range of vehicles, from compact cars to heavy-duty trucks. Popular models include the Silverado, Camaro, and the Corvette, a sports car known for its performance.",
    "bmw": "Bayerische Motoren Werke AG (BMW) is a German luxury vehicle manufacturer. Renowned for its performance-oriented vehicles, BMW's lineup includes sedans, coupes, and SUVs. The 3 Series, 5 Series, and X5 are among its most popular models. BMW is also advancing in electric mobility with its i Series.",
    "mercedes-benz": "A German luxury automobile manufacturer, Mercedes-Benz is known for producing high-quality, luxurious vehicles. The company’s cars, such as the C-Class, E-Class, and S-Class, are symbols of luxury and performance. Mercedes-Benz is also making significant strides in the electric vehicle market with its EQ series.",
    "audi": "Audi is a German luxury car manufacturer and a subsidiary of the Volkswagen Group. Known for its Quattro all-wheel-drive system and advanced technology, Audi’s popular models include the A4, A6, and Q5. Audi is also heavily involved in electric vehicle development with its e-tron series.",
    "nissan": "Nissan is a Japanese multinational automobile manufacturer known for producing a range of vehicles, from economical sedans to powerful SUVs. The Altima, Rogue, and Leaf, one of the first mass-market electric cars, are among Nissan’s top models. Nissan is also involved in autonomous driving technology.",
    "hyundai": "A South Korean automaker, Hyundai is known for producing affordable, reliable vehicles with a strong warranty. The company’s popular models include the Elantra, Sonata, and Tucson. Hyundai is also expanding its electric vehicle lineup with models like the Ioniq and Kona Electric.",
    "volkswagen": "Volkswagen, a German car manufacturer, is one of the world’s largest automakers. Known for the Beetle and Golf, Volkswagen produces a wide range of vehicles. The company is shifting towards electric vehicles with its ID series, aiming to lead in the EV market.",
    "subaru": "Subaru is a Japanese automaker known for its use of all-wheel drive (AWD) in most of its vehicles and its boxer engine layout. Popular models include the Outback, Forester, and WRX. Subaru is also recognized for its safety features and durability.",
    "kia": "Kia is a South Korean car manufacturer that has gained a reputation for producing reliable and affordable vehicles. The Sportage, Sorento, and Optima are among its well-known models. Kia has also entered the electric vehicle market with models like the Niro EV and EV6.",
    "mazda": "Mazda is a Japanese automaker known for its sporty handling and stylish designs. The Mazda3, Mazda6, and CX-5 are popular models. Mazda emphasizes its SkyActiv technology, which improves fuel efficiency without compromising performance.",
    "volvo": "A Swedish luxury car manufacturer, Volvo is known for its focus on safety and innovative features. The XC90, S60, and V60 are among its popular models. Volvo is also committed to electrification, with plans to become a fully electric car brand by 2030.",
    "tesla": "Tesla is an American electric vehicle manufacturer led by Elon Musk. Known for its cutting-edge technology and innovation, Tesla’s popular models include the Model S, Model 3, and Model X. Tesla has played a significant role in popularizing electric vehicles globally."
};




let car=document.querySelector(".cars");
let image=document.querySelector(".image");
let content=document.querySelector(".content");
let carName=document.querySelector(".name");

car.onchange=()=>{
    console.log(car.value);
    let img=car.value;
    carName.innerText=car.value.toUpperCase();
    image.style.backgroundImage=`url('./images/${img}.jpg')`;
    content.innerText=carCompaniesInfo[img];
}