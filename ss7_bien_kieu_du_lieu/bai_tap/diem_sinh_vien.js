

function tong() {
    let diemtoan= +document.getElementById("diemtoan").value;
    let diemhoa= +document.getElementById("diemhoa").value;
    let diemsinh= +document.getElementById("diemsinh").value;
    let tBinh= (diemtoan+ diemsinh+diemhoa)/3;
    let tong1= (diemtoan+ diemsinh+diemhoa);
    document.getElementById("result").innerHTML=`tổng: `+tong1;
    document.getElementById("result1").innerHTML=`tb: `+tBinh;

}
