var host = "http://postku.my.id:8000/";

// ================================= ENDPOINT =================================
// AUTH
export var apiPing = host + "auth/ping";
export var apiLogin = host + "auth/login/email";
export var apiRegister = host + "auth/create";

// STORE
export var apiGetStore = host + "store";
export var apiPostStore = host + "store";

// USRES
export var apiGetDetailUser = host + "user";
export var apiDeleteUser = host + "auth?user_id=";

// GENERAL
export var apiGetProvince = host + "general/province";
export var apiGetKabkot = host + "general/city?province_id=";
export var apiGetKecamatan = host + "general/districts?districts_id=";

// ================================= MODELS =================================

export async function APIGetProvince() {
  try {
    var resp = await fetch(apiGetProvince, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED FETCH PROVICE");
    }
  } catch (error) {
    console.log("FAILED FETCH PROVICE");
  }
}

export async function APIGetKabkot(province_id) {
  try {
    var resp = await fetch(apiGetKabkot + province_id, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED FETCH Kabkot");
    }
  } catch (error) {
    console.log("FAILED FETCH Kabkot");
  }
}

export async function APIGetKecamatan(kabkot_id) {
  try {
    var resp = await fetch(apiGetKecamatan + kabkot_id, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED FETCH Kecamatan");
    }
  } catch (error) {
    console.log("FAILED FETCH Kecamatan");
  }
}

export async function APIPostRegister(email, paswword, fullname, phone) {
  var head = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  var payload = {
    email: email,
    password: paswword,
    fullname: fullname,
    no_phone: phone,
    role: "1",
  };
  try {
    var resp = await fetch(apiRegister, {
      method: "POST",
      headers: head,
      body: JSON.stringify(payload),
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED FETCH Register");
    }
  } catch (error) {
    console.log("FAILED FETCH Register");
  }
}

export async function APICreateStore(
  name,
  address,
  province,
  city,
  district,
  category,
  jwt
) {
  var head = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwt}`,
  };
  var payload = {
    name: name,
    address: address,
    province: province,
    city: city,
    district: district,
    category: category,
  };
  try {
    var resp = await fetch(apiPostStore, {
      method: "POST",
      headers: head,
      body: JSON.stringify(payload),
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED FETCH Create Store");
    }
  } catch (error) {
    console.log("FAILED FETCH Create Store");
  }
}

export async function APILogin(email, password) {
  var formData = new FormData();
  formData.append("username", email);
  formData.append("password", password);

  try {
    var resp = await fetch(apiLogin, {
      method: "POST",
      body: formData,
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      return { status_code: 404, msg: "Email or password invalid" };
    }
  } catch (error) {
    return { status_code: 404, msg: "Email or password invalid" };
  }
}

export async function APIDeleteUser(user_id) {
  try {
    var resp = await fetch(apiDeleteUser + user_id, {
      method: "DELETE",
      headers: {
        accept: "application/json",
      },
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED FETCH Delete User");
    }
  } catch (error) {
    console.log("FAILED FETCH Delete User");
  }
}

export async function APIGetStore(jwt) {
  try {
    var resp = await fetch(apiGetStore, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      modaltextErr.style.display = "flex";
    }
  } catch (error) {
    modaltextErr.style.display = "flex";
  }
}

export async function APIGetUser(jwt) {
  try {
    var resp = await fetch(apiGetDetailUser, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (resp.ok) {
      var data = await resp.json();
      return data;
    } else {
      console.log("FAILED LOAD USERS");
    }
  } catch (error) {
    console.log("FAILED LOAD USERS");
  }
}
