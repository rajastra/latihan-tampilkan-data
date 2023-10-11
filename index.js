/*
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru
*/
function checkDivision(divisi) {
  if (divisi === 'HR') {
    return 'melakukan rekrutmen untuk calon pegawai baru';
  } else if (divisi === 'Programmer') {
    return 'membuat aplikasi sesuai dengan kebutuhan divisi';
  } else if (divisi === 'UI/UX') {
    return 'membuat design aplikasi';
  } else if (divisi === 'CEO') {
    return 'mengatur perusahaan secara keseluruhan';
  } else {
    return 'divisi tidak tersedia';
  }
}

/*
Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.
*/
function compare(a, b) {
  if (a > b) {
    return 'a lebih besar dari b';
  } else if (a < b) {
    return 'a lebih kecil dari b';
  } else if (a === b) {
    return 'a sama dengan b';
  } else {
    return 'nilai tidak tersedia';
  }
}

// buat fungsi untuk hari menggunakan switch case
function hari(hari) {
  switch (hari) {
    case 1:
      return 'senin';
    case 2:
      return 'selasa';
    case 3:
      return 'rabu';
    case 4:
      return 'kamis';
    case 5:
      return 'jumat';
    case 6:
      return 'sabtu';
    case 7:
      return 'minggu';
    default:
      return 'hari tidak tersedia';
  }
}

/*
Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri
*/
function gameSederhana(input) {
  switch (input) {
    case 'UP':
      return 'Karakter berjalan keatas';
    case 'RIGHT':
      return 'Karakter berjalan kekanan';
    case 'BOTTOM':
      return 'Karakter berjalan kebawah';
    case 'LEFT':
      return 'Karakter berjalan kekiri';
    default:
      return 'input tidak tersedia';
  }
}

function drawUserText(number) {
  // draw to html
  const userList = document.querySelector('.user-list');
  for (let i = 1; i <= number; i++) {
    const listItem = document.createElement('p');
    listItem.textContent = `User ke-${i}`;
    userList.appendChild(listItem);
  }
}

// latihan array 3 oktober 2023
// const pekerjaanIT = [
//   'Front End Developer',
//   'Back End Developer',
//   'UI/UX Designer',
//   'DevOps',
//   'Data Scientist',
//   'Data Analyst',
//   'Mobile Developer',
//   'Game Developer',
//   'Full Stack Developer',
//   'Software Engineer',
// ];

// // menampilkan panjang array
// console.log('Panjang Array : ' + pekerjaanIT.length);

// // menampilkan isi array
// pekerjaanIT.forEach((pekerjaan) => {
//   console.log(pekerjaan);
// });

// // menampilkan isi array ke html
// const listPekerjaanContainer = document.querySelector('.list-pekerjaan');
// pekerjaanIT.forEach((pekerjaan) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = pekerjaan;
//   listPekerjaanContainer.appendChild(listItem);
// });

const getData = async () => {
  try {
    const response = await fetch(
      'https://6524a83cea560a22a4e9fb49.mockapi.io/api/v1/users'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createCard = (data) => {
  return `
    <div class="card">
      <img src="${data.avatar}" alt="${data.fullname}" />
      <div class="card-body">
        <h3>${data.fullname}</h3>
        <p>${data.city}</p>
        <p>${data.street}</p>
      </div>
    </div>
  `;
};

// const createCard = (data) => {
//   return `
//       <div class="card">
//         <div class="card-body">
//           <h3>${data.firstname}</h3>
//           <p>${data.lastname}</p>
//           <p>${data.email}</p>
//         </div>
//       </div>
//     `;
// };

const renderDataCard = async () => {
  const data = await getData();
  const userList = document.querySelector('.user-list');
  const renderData = data.map((user) => createCard(user)).join(' ');
  userList.insertAdjacentHTML('beforeend', renderData);
};

renderDataCard();

// latihan local storage
// const formUser = document.querySelector('.form-user');
// let dataUser = JSON.parse(localStorage.getItem('user')) || [];
// const btnShowData = document.querySelector('.show-data');

// save data to local storage
// const saveData = (data) => {
//   localStorage.setItem('user', JSON.stringify(data));
// };

// const showData = () => {
//   const data = JSON.parse(localStorage.getItem('user'));
//   const userList = document.querySelector('.user-list');
//   userList.innerHTML = '';
//   const renderData = data.map((user) => createCard(user)).join(' ');
//   userList.insertAdjacentHTML('beforeend', renderData);
// };

// event listener
// formUser.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const firstname = document.querySelector('#firstname').value;
//   const lastname = document.querySelector('#lastname').value;
//   const email = document.querySelector('#email').value;

//   const data = {
//     firstname,
//     lastname,
//     email,
//   };

//   dataUser.push(data);

//   saveData(dataUser);

//   // clear form fields
//   document.querySelector('#firstname').value = '';
//   document.querySelector('#lastname').value = '';
//   document.querySelector('#email').value = '';
// });

// btnShowData.addEventListener('click', () => {
//   showData();
// });
