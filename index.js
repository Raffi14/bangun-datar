export function persegi(sisi) {
    return {
      luas: sisi * sisi,
      keliling: 4 * sisi
    };
  }
  
  export function lingkaran(jariJari) {
    const phi = 3.14;
    return {
      luas: phi * jariJari * jariJari,
      keliling: 2 * phi * jariJari
    };
  }
  
  export function segitiga(alas, tinggi, sisiA = alas, sisiB = tinggi, sisiC = Math.sqrt(alas**2 + tinggi**2)) {
    return {
      luas: 0.5 * alas * tinggi,
      keliling: sisiA + sisiB + sisiC
    };
  }
  