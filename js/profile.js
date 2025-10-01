const name = document.getElementById('name');
const addressNo = document.getElementById('address-no');
const villageNo = document.getElementById('village-no');
const alley = document.getElementById('alley');
const road = document.getElementById('road');
const subDistrict = document.getElementById('subdistrict');
const district = document.getElementById('district');
const province = document.getElementById('province');
const zipcode = document.getElementById('zipcode');

const fetchProfileData = async () => {
  try {
    const response = await fetch('http://localhost:3000/members/profile', {
      method: 'GET',
      // Set credentials to same-origin so cookies are included
      credentials: 'include'
    });

    if (!response.ok) {
      alert('Failed to fetch profile data. Please log in again.');
      window.location.href = '/login.html';
      return;
    }

    const data = await response.json();
    
    // Populate the profile fields with fetched data
    name.value = data.name || '';
    addressNo.value = data.address_no || '';
    villageNo.value = data.village_no || '';
    alley.value = data.alley || '';
    road.value = data.road || '';
    subDistrict.value = data.subdistrict || '';
    district.value = data.district || '';
    province.value = data.province || '';
    zipcode.value = data.zipcode || '';

  } catch (error) {
    console.error('Error fetching profile data:', error);
  }
}

fetchProfileData();
