export const initialPerson = {
    name: null,
    age: null,
    gender: null,
    relation: null,
    numberOfChildren: 0,
    children: [],
    disease: false,
    ownCar: false,
    ownHouse: false,
    income: null,
    investment: null,
    saving: null,
    debt: null,
    lifeStyle: null,
    goals: [],
    enabled: false
}
export const getLocalStorage = () => {
    let insuranceDemo = localStorage.getItem('insuranceDemo')
    if (insuranceDemo) {        
      return JSON.parse(localStorage.getItem('insuranceDemo'))
    } else {
      return initialPerson;
    }
}

export const setLocalStorage = () => {
    let insuranceDemo = localStorage.getItem('insuranceDemo')
    if (insuranceDemo) {
      return JSON.parse(localStorage.getItem('insuranceDemo'))
    } else {
      return initialPerson;
    }
}

  export const nameSingleInputProps = {
    label: 'Ad / soyad:',
    value: '',
    placeHolder: '',
    type: 'text',
    min: null,
    max: null,
    onChange: (event) => console.log('NAME EVENT: ', event)
  }
  
  export const ageSingleInputProps = {
    label: 'Yaş:',
    value: '',
    placeHolder: '',
    type: 'number',
    min: 18,
    max: 60,
    onChange: (event) => console.log('AGE EVENT: ', event)
  }

  export const childSingleInputProps = {
    label: 'Çocuk sayısı:',
    value: '',
    placeHolder: '',
    type: 'number',
    min: 0,
    max: 200,
    onChange: (event) => console.log('CHILD NUMBER EVENT: ', event)
  }

  const genderOptions = [
    { 
      value: 'K',
      label: "KADIN"
    },
    {
      value:  'E',
      label: "ERKEK"
    }
  ];
  
  export const genderProps = {
    label: 'Cinsiyet:',
    options: genderOptions,
    value: null,
    onChange: (event) => console.log('GENDER EVENT: ', event)
  }

  const relationOptions = [
    { 
      value: 0,
      label: "BEKAR"
    },
    {
      value: 1,
      label: "EVLİ"
    }
  ];
  
  export const relationProps = {
    label: 'Medeni durum:',
    options: relationOptions,
    value: null,
    onChange: (event) => console.log('RELATION EVENT: ', event)
  }

  export const diseaseSingleInputProps = {
    label: 'Ailenizde Kritik hastalık var mı:',
    value: false,
    placeHolder: '',
    type: 'checkbox',
    min: null,
    max: null,
    onChange: (event) => console.log('DISEASE EVENT: ', event)
  }

  export const ownCarSingleInputProps = {
    label: 'Arabanız var mı:',
    value: false,
    placeHolder: '',
    type: 'checkbox',
    min: null,
    max: null,
    onChange: (event) => console.log('CAR EVENT: ', event)
  }

  export const ownHouseSingleInputProps = {
    label: 'Eviniz var mı:',
    value: false,
    placeHolder: '',
    type: 'checkbox',
    min: null,
    max: null,
    onChange: (event) => console.log('HOUSE EVENT: ', event)
  }

  export const investSingleInputProps = {
    label: 'Yatırım yapabildiğiniz miktar ($):',
    value: '',
    placeHolder: '',
    type: 'number',
    min: 0,
    onChange: (event) => console.log('INVEST  EVENT: ', event)
  }

  export const incomeSingleInputProps = {
    label: 'Hane geliri ($):',
    value: '',
    placeHolder: '',
    type: 'number',
    min: 0,
    onChange: (event) => console.log('INCOME   EVENT: ', event)
  }

  export const savingSingleInputProps = {
    label: 'Birikim miktarı ($):',
    value: '',
    placeHolder: '',
    type: 'number',
    min: 0,
    onChange: (event) => console.log('SAVING    EVENT: ', event)
  }

  export const debtSingleInputProps = {
    label: 'Borç miktarı ($):',
    value: '',
    placeHolder: '',
    type: 'number',
    min: 0,
    onChange: (event) => console.log('DEBT     EVENT: ', event)
  }

  const lifeStyleOptions = [
    {value: 0,
        label: 'Basic'}, 
    {value: 1,
        label: 'Comfort'}, 
    {value: 2,
        label: 'Lux'}]

          
  export const lifeStyleProps = {
    label: 'Yaşam standartı beklentisi:',
    options: lifeStyleOptions,
    value: null,
    onChange: (event) => console.log('LIFE STYLE EVENT: ', event)
  }

  const goalOptions = [
    { value: 'E', label: 'EV' },
    { value: 'A', label: 'ARABA' },
    { value: 'S', label: 'SAĞLIK' }
  ]
  
  export const goalProps = {
    label: 'Hedefler:',
    options: goalOptions,
    value: [],
    onChange: (event) => console.log('GOALS EVENT: ', event)
  }

  export const calculateResult = (person) => {
    const lastAge = 76;
    const currentAge = person.age;
    const yearsToLive = lastAge - currentAge;
    const yearsUntilRetirement = (currentAge >= 46) ? 10 : (56 - currentAge);
    const yearsAfterRetirement = yearsToLive - yearsUntilRetirement;
    const numberOfPersons = 1 + 0.5 * (person.relation[0].value + Math.min(person.numberOfChildren, 2));
    console.log('numberOfPersons', numberOfPersons);
    const lifeStyleConstants = [18000, 30000, 42000].map(i => i * numberOfPersons);
    console.log('lifeStyleConstants', lifeStyleConstants);
    const carBasedOnLifeStyle = [25000, 50000, 75000];
    const houseBasedOnLifeStyle = [150000, 250000, 400000];
    console.log('yearsAfterRetirement', yearsAfterRetirement);
    console.log('savingRequired', lifeStyleConstants[person.lifeStyle[0].value] * yearsAfterRetirement);
    console.log('(person.saving - person.debt)', (person.saving - person.debt));
    const savingRequired = lifeStyleConstants[person.lifeStyle[0].value] * yearsAfterRetirement - (person.saving - person.debt);
    console.log('savingRequired', savingRequired);
    const totalRequired = lifeStyleConstants[person.lifeStyle[0].value] * yearsToLive - (person.saving - person.debt)
      + (person.goals != null && person.goals.find(item => item.value === goalOptions[0].value) != null ? houseBasedOnLifeStyle[person.lifeStyle[0].value] : 0)
      + (person.goals != null && person.goals.find(item => item.value === goalOptions[1].value) != null ? carBasedOnLifeStyle[person.lifeStyle[0].value] : 0);

    return {
      title: "Sayın " + (person.name == null ? "İlgili": person.name) + ",",
      line1: "Sağladığınız bilgilere dayanarak emeklilik dönemi için ihtiyaç duyacağınız birikim miktarı "
        + savingRequired + "$ olarak hesaplanmıştır.",
      line2: "Size önerebileceğimiz ürünler aşağı listelenmiştir",
      line3: totalRequired + "$ teminatlı hayat sigortası",
      line4: person.disease && "3000$ teminatlı kritik hastalıklar sigortası",
      line5: person.goals.find(item => item.value === goalOptions[2].value) != null && "Tamamlayıcı sağlık sigortası"
    }
  }