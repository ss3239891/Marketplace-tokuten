import React, { Component } from 'react'
import "./sidebar.css"
import $ from 'jquery';
import { Page1 } from "./views/create-rewards-first";


export class Sidebar extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        {window.innerWidth < 768 ? <button type="button" id="sidebarCollapse" className="navbar-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button> : null}



                        <div className=" div-nav" style={{ position: "relative" }}>
                            <span className=" navbar-brand title-brand">TOKUTEN</span>
                            <span className=" navbar-brand inner-txt" >とくてん</span>
                        </div>
                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-align-justify"></i>
                        </button>



                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.4813 18.7367L18.6804 14.9359L15.7569 13.728C16.7304 12.3437 17.2519 10.6923 17.25 9C17.25 4.45092 13.5491 0.75 9 0.75C4.45092 0.75 0.75 4.45092 0.75 9C0.75 13.5491 4.45092 17.25 9 17.25C10.707 17.2519 12.3721 16.7214 13.7634 15.7323L14.9681 18.648L18.7687 22.449C19.0125 22.6927 19.3019 22.8861 19.6204 23.018C19.9388 23.15 20.2802 23.2179 20.6249 23.2179C20.9696 23.2179 21.311 23.15 21.6295 23.0181C21.948 22.8862 22.2374 22.6928 22.4811 22.4491C22.7249 22.2053 22.9183 21.9159 23.0502 21.5975C23.1821 21.279 23.25 20.9376 23.2501 20.5929C23.2501 20.2482 23.1822 19.9068 23.0503 19.5883C22.9184 19.2698 22.725 18.9805 22.4813 18.7367ZM2.25 9C2.25 5.27812 5.27812 2.25 9 2.25C12.7219 2.25 15.75 5.27812 15.75 9C15.75 12.7219 12.7219 15.75 9 15.75C5.27812 15.75 2.25 12.7219 2.25 9ZM21.4205 21.3883C21.2094 21.599 20.9233 21.7173 20.625 21.7173C20.3267 21.7173 20.0406 21.599 19.8295 21.3883L16.2402 17.799L15.1201 15.088L17.8312 16.208L21.4206 19.7973C21.6313 20.0085 21.7495 20.2946 21.7495 20.5928C21.7495 20.8911 21.6312 21.1772 21.4205 21.3883Z" fill="black" fill-opacity="0.7" />
                            </svg>

                            <p class="search-dash">Search dashboard</p>




                            <input type="text" class="form-control" />
                        </div>
                        <div className="action" style={{ position: "relative", display: "flex", top: "10px" }}>
                            <svg className="dot" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.15235 0.125C5.7926 0.125 4.46339 0.528212 3.3328 1.28365C2.20221 2.03908 1.32103 3.11281 0.800675 4.36905C0.280323 5.62529 0.144175 7.00763 0.409448 8.34125C0.674721 9.67486 1.3295 10.8999 2.29099 11.8614C3.25247 12.8228 4.47748 13.4776 5.8111 13.7429C7.14472 14.0082 8.52705 13.872 9.7833 13.3517C11.0395 12.8313 12.1133 11.9501 12.8687 10.8195C13.6241 9.68896 14.0273 8.35975 14.0273 7C14.0253 5.17727 13.3003 3.42979 12.0114 2.14092C10.7226 0.85206 8.97508 0.127068 7.15235 0.125ZM7.15235 11.375C6.28705 11.375 5.44119 11.1184 4.72173 10.6377C4.00226 10.1569 3.44151 9.47367 3.11037 8.67424C2.77924 7.87481 2.6926 6.99515 2.86141 6.14648C3.03022 5.29781 3.4469 4.51826 4.05876 3.90641C4.67061 3.29455 5.45016 2.87787 6.29883 2.70906C7.14749 2.54025 8.02716 2.62689 8.82659 2.95803C9.62601 3.28916 10.3093 3.84991 10.79 4.56938C11.2708 5.28885 11.5273 6.13471 11.5273 7C11.526 8.15992 11.0647 9.27196 10.2445 10.0922C9.42431 10.9123 8.31227 11.3737 7.15235 11.375Z" fill="black" />
                            </svg>
                            <svg className="setting-icon" width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.3044 24.1812L32.8224 22.138C33.2624 20.0691 33.2624 17.9309 32.8224 15.862L35.3044 13.8188C35.5907 13.5843 35.7841 13.2555 35.85 12.8913C35.916 12.5272 35.8501 12.1514 35.6642 11.8314L33.1164 7.41868C32.9322 7.09761 32.6397 6.85262 32.2913 6.72764C31.9429 6.60266 31.5614 6.60586 31.2151 6.73665L28.2025 7.86532C26.6332 6.44741 24.7817 5.37734 22.7697 4.72532L22.2411 1.55571C22.1813 1.19042 21.9933 0.858389 21.7109 0.619122C21.4284 0.379856 21.07 0.248999 20.6999 0.250006H15.6044C15.2343 0.249012 14.8759 0.379863 14.5934 0.619111C14.311 0.85836 14.123 1.19037 14.0632 1.55563L13.5349 4.72532C11.5228 5.37732 9.67141 6.44739 8.10206 7.86532L5.08917 6.73649C4.74291 6.60579 4.36143 6.60265 4.01308 6.72764C3.66472 6.85263 3.37225 7.09758 3.18807 7.4186L0.64034 11.8316C0.454529 12.1517 0.388727 12.5274 0.454719 12.8916C0.520712 13.2557 0.714188 13.5845 1.0005 13.819L3.48229 15.862C3.04229 17.9309 3.04229 20.0691 3.48229 22.138L1.00026 24.1812C0.713999 24.4157 0.520576 24.7445 0.454628 25.1087C0.388679 25.4728 0.454513 25.8486 0.64034 26.1686L3.18815 30.5813C3.37235 30.9024 3.66486 31.1474 4.01327 31.2723C4.36168 31.3973 4.74321 31.3941 5.08948 31.2634L8.10214 30.1347C9.67149 31.5526 11.5229 32.6227 13.5349 33.2747L14.0632 36.4443C14.1231 36.8096 14.3111 37.1416 14.5935 37.3808C14.8759 37.6201 15.2343 37.751 15.6044 37.75H20.6999C21.07 37.751 21.4284 37.6202 21.7108 37.3809C21.9933 37.1417 22.1813 36.8097 22.2411 36.4444L22.7695 33.2747C24.7815 32.6227 26.6329 31.5526 28.2023 30.1347L31.2151 31.2635C31.5614 31.3942 31.9428 31.3973 32.2912 31.2724C32.6395 31.1474 32.932 30.9024 33.1162 30.5814L35.6638 26.1684C35.8496 25.8484 35.9156 25.4728 35.8497 25.1086C35.7839 24.7445 35.5906 24.4158 35.3044 24.1812ZM31.3485 28.6437L27.5899 27.2356L27.0208 27.8085C25.4549 29.3868 23.4963 30.5188 21.347 31.0877L20.5657 31.2936L19.906 35.25H16.3989L15.7394 31.2936L14.9582 31.0877C12.8088 30.5188 10.8502 29.3868 9.28432 27.8085L8.71518 27.2356L4.95604 28.6437L3.20284 25.6064L6.29885 23.0577L6.08792 22.2785C5.50782 20.1313 5.50782 17.8687 6.08792 15.7215L6.29885 14.9424L3.20284 12.3937L4.95643 9.35633L8.71495 10.7645L9.28409 10.1915C10.85 8.61318 12.8086 7.48121 14.9579 6.91235L15.7392 6.70641L16.3986 2.75001H19.906L20.5655 6.70641L21.3467 6.91235C23.496 7.48121 25.4547 8.61318 27.0206 10.1915L27.5897 10.7645L31.3482 9.35633L33.1019 12.3936L30.0059 14.9424L30.2168 15.7215C30.7969 17.8687 30.7969 20.1313 30.2168 22.2785L30.0059 23.0577L33.1019 25.6063L31.3485 28.6437Z" fill="black" />

                            </svg>

                            <svg className="bell" width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.1769 25.232L27.7652 18.9332V12.375C27.7652 5.82711 22.4381 0.5 15.8902 0.5C9.34232 0.5 4.01521 5.82711 4.01521 12.375V18.9332L0.603332 25.2319C0.448607 25.5175 0.370733 25.8384 0.377341 26.1631C0.38395 26.4879 0.474814 26.8054 0.64103 27.0845C0.807245 27.3635 1.04311 27.5946 1.32552 27.7551C1.60792 27.9156 1.92718 28 2.252 28H9.0438C9.02486 28.2078 9.01529 28.4163 9.01513 28.625C9.01513 30.4484 9.73946 32.197 11.0288 33.4864C12.3181 34.7757 14.0668 35.5 15.8901 35.5C17.7135 35.5 19.4622 34.7757 20.7515 33.4864C22.0408 32.197 22.7651 30.4484 22.7651 28.625C22.7651 28.4141 22.755 28.2059 22.7365 28H29.5283C29.853 28 30.1723 27.9156 30.4546 27.755C30.737 27.5945 30.9728 27.3634 31.139 27.0844C31.3052 26.8053 31.396 26.4879 31.4026 26.1631C31.4092 25.8384 31.3314 25.5175 31.1767 25.232H31.1769ZM20.2652 28.625C20.2657 29.2262 20.1423 29.8211 19.9026 30.3725C19.6629 30.9239 19.3122 31.42 18.8723 31.8298C18.4323 32.2396 17.9127 32.5543 17.3457 32.7544C16.7787 32.9544 16.1766 33.0354 15.5769 32.9923C14.9772 32.9493 14.3928 32.7831 13.8602 32.5041C13.3276 32.2251 12.8583 31.8394 12.4814 31.3709C12.1045 30.9025 11.8283 30.3614 11.6698 29.7814C11.5114 29.2014 11.4742 28.595 11.5606 28H20.2197C20.2498 28.207 20.265 28.4158 20.2652 28.625ZM3.3013 25.5L6.51521 19.5668V12.375C6.51521 9.8886 7.50293 7.50403 9.26108 5.74587C11.0192 3.98772 13.4038 3 15.8902 3C18.3766 3 20.7612 3.98772 22.5193 5.74587C24.2775 7.50403 25.2652 9.8886 25.2652 12.375V19.5668L28.479 25.5H3.3013Z" fill="black" />
                            </svg>

                        </div>
                        <div className="imgdiv" style={{ position: "relative" }}>

                            <img
                                className="user-avatar rounded-circle iuser mr-2"
                                src={require("./images/avatars/0.jpg")}
                                alt="User Avatar"
                                style={{ width: window.innerWidth < 768 ? "44px" : null, marginTop: window.innerWidth < 768 ? "16px" : null, marginLeft: window.innerWidth < 768 ? "55px" : null }}
                            />{" "}
                            <span className="d-none d-md-inline-block user-text" style={{ marginLeft: "14px", marginRight: "9px" }} >Ayush singh</span>
                            <svg className="drop" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.666 1.6665L7.99935 8.33317L1.33268 1.6665" stroke="black" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                </nav>

                <div className="wrapper">


                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3 className="title-main">Armor Fitness</h3>
                            <h3 className="title-main-sub">All Branch</h3>
                        </div>

                        <ul className="list-unstyled components">

                            <li className="active">
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><svg style={{ marginRight: "19px" }} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6771 6.76391L7.47119 1.05451C7.26944 0.868898 7.00377 0.768449 6.72969 0.774156C6.45561 0.779864 6.19434 0.891285 6.0005 1.08513L0.292906 6.79276L0 7.08563V15.4999H5.5V10.2499H8.5V15.4999H14V7.06104L13.6771 6.76391ZM6.75119 1.77394C6.76 1.77394 6.75456 1.77585 6.75078 1.77957C6.74687 1.77585 6.74237 1.77394 6.75119 1.77394ZM13 14.4999H9.5V10.2499C9.5 9.98463 9.39464 9.73028 9.20711 9.54274C9.01957 9.35521 8.76522 9.24985 8.5 9.24985H5.5C5.23478 9.24985 4.98043 9.35521 4.79289 9.54274C4.60536 9.73028 4.5 9.98463 4.5 10.2499V14.4999H1V7.49985L6.75119 1.79223C6.75159 1.79185 6.75163 1.79151 6.75194 1.79113L13 7.49985V14.4999Z" fill="white" /></svg>Home</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="home">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="home">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="home">Home 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="home"> <svg style={{ marginRight: "19px" }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4371 6.20866C15.3653 5.98616 15.2335 5.78784 15.056 5.63565C14.8786 5.48347 14.6624 5.38336 14.4316 5.34641L10.8095 4.75775L9.13033 1.49481C9.02338 1.28709 8.86127 1.11284 8.6618 0.991187C8.46232 0.869534 8.23319 0.805176 7.99955 0.805176C7.76591 0.805176 7.53678 0.869534 7.33731 0.991187C7.13784 1.11284 6.97573 1.28709 6.86877 1.49481L5.18965 4.75775L1.56755 5.34641C1.33695 5.38394 1.12114 5.48427 0.943802 5.63638C0.766465 5.7885 0.634454 5.98652 0.562254 6.20872C0.490054 6.43092 0.480453 6.66872 0.534507 6.89602C0.588561 7.12332 0.704179 7.33134 0.868677 7.49725L3.45305 10.1025L2.89368 13.7292C2.85778 13.9602 2.88629 14.1966 2.97607 14.4125C3.06584 14.6283 3.2134 14.8152 3.40253 14.9526C3.59165 15.09 3.815 15.1726 4.04802 15.1913C4.28104 15.21 4.5147 15.1641 4.7233 15.0585L7.99955 13.4057L11.2759 15.0585C11.4845 15.1638 11.7181 15.2096 11.951 15.1908C12.184 15.1721 12.4072 15.0894 12.5963 14.9521C12.7853 14.8147 12.9329 14.6279 13.0227 14.4122C13.1126 14.1965 13.1412 13.9602 13.1055 13.7292L12.5461 10.1025L15.1305 7.49725C15.2955 7.33166 15.4115 7.12364 15.4656 6.89621C15.5197 6.66878 15.5098 6.43082 15.4371 6.20866ZM14.4205 6.79303L11.4808 9.75644L12.1172 13.8818C12.1251 13.9312 12.1191 13.9818 12.1 14.028C12.0809 14.0742 12.0493 14.1143 12.0089 14.1437C11.9684 14.1731 11.9206 14.1907 11.8707 14.1946C11.8208 14.1985 11.7708 14.1885 11.7263 14.1658L7.99955 12.2857L4.2728 14.1658C4.22825 14.1886 4.17827 14.1986 4.12839 14.1947C4.07851 14.1908 4.03068 14.1732 3.99021 14.1438C3.94973 14.1144 3.91819 14.0743 3.89907 14.0281C3.87995 13.9818 3.87401 13.9312 3.8819 13.8818L4.5183 9.75644L1.57865 6.793C1.54354 6.75753 1.51887 6.71309 1.50735 6.66454C1.49582 6.61598 1.49788 6.56519 1.5133 6.51773C1.52872 6.47027 1.55691 6.42797 1.59477 6.39547C1.63263 6.36296 1.67871 6.3415 1.72796 6.33344L5.84799 5.66388L7.75796 1.95241C7.7808 1.90801 7.81543 1.87077 7.85805 1.84476C7.90067 1.81876 7.94963 1.805 7.99955 1.805C8.04948 1.805 8.09844 1.81876 8.14106 1.84476C8.18368 1.87077 8.21831 1.90801 8.24115 1.95241L10.1511 5.66388L14.2711 6.33344C14.3204 6.3415 14.3665 6.36296 14.4043 6.39547C14.4422 6.42797 14.4704 6.47027 14.4858 6.51773C14.5012 6.56519 14.5033 6.61598 14.4918 6.66454C14.4802 6.71309 14.4556 6.75753 14.4205 6.793L14.4205 6.79303Z" fill="white" /></svg>Rewards</a>
                            </li>
                            <li>
                                <a href="home"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0.5C5.57207 0.50105 4.68244 0.870137 4.02629 1.52629C3.37014 2.18244 3.00106 3.07206 3 4V6.49003C3.00032 6.90829 3.10525 7.31982 3.30525 7.68716L4.16322 9.26006L1.8875 10.7393C1.53776 10.9657 1.25037 11.2762 1.05165 11.6424C0.852931 12.0086 0.749218 12.4187 0.750004 12.8354V15.5H9.75V14.5H1.75V12.8354C1.74954 12.5854 1.81177 12.3393 1.93101 12.1196C2.05025 11.8998 2.22268 11.7135 2.43254 11.5777L5.48441 9.59397L4.18316 7.20831C4.06316 6.98791 4.0002 6.74099 4 6.49003V4C4 3.33696 4.2634 2.70107 4.73224 2.23223C5.20108 1.76339 5.83696 1.5 6.5 1.5C7.16305 1.5 7.79893 1.76339 8.26777 2.23223C8.73661 2.70107 9 3.33696 9 4V6.49003C8.99981 6.74099 8.93685 6.98791 8.81685 7.20831L7.51563 9.59397L9.75 11.0463V9.85366L8.83679 9.25991L9.69475 7.68697C9.89474 7.31969 9.99967 6.90822 10 6.49003V4C9.99895 3.07206 9.62987 2.18244 8.97372 1.52629C8.31757 0.870137 7.42794 0.50105 6.5 0.5Z" fill="white" /></svg> <svg class="plus-2" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.25 2.5V0.5H2.25V2.5H0.25V3.5H2.25V5.5H3.25V3.5H5.25V2.5H3.25Z" fill="white" /></svg>Customer Directory</a>
                            </li>
                            <li>
                                <a href="home"><svg style={{ marginRight: "21px" }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 14.5V0.5H2.25V14.5H0.5V15.5H15.5V14.5H13.75ZM12.75 14.5H8.5V12.5H7.5V14.5H3.25V1.5H12.75V14.5Z" fill="white" /></svg>Marketplace</a>
                            </li>
                            <li>
                                <a href="home"><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 5.04541V5C12.5 2.51875 10.4812 0.5 8 0.5C5.51875 0.5 3.5 2.51875 3.5 5V5.07784C2.75941 5.2176 2.07669 5.57323 1.53769 6.1C1.20968 6.41836 0.948842 6.79926 0.770606 7.22018C0.59237 7.6411 0.500354 8.09349 0.5 8.55059C0.5 9.52306 0.899625 10.4494 1.62531 11.159C2.33437 11.8523 3.29181 12.25 4.25219 12.25H6.25V11.25H4.25219C2.78606 11.25 1.5 9.98859 1.5 8.55059C1.5 7.22972 2.61375 6.11572 4.03553 6.0145L4.5 5.98141V5C4.5 4.07174 4.86875 3.1815 5.52513 2.52513C6.1815 1.86875 7.07174 1.5 8 1.5C8.92826 1.5 9.8185 1.86875 10.4749 2.52513C11.1313 3.1815 11.5 4.07174 11.5 5V6.00125L11.9937 6.0075C13.446 6.02588 14.5 7.09541 14.5 8.55059C14.5 10.0643 13.3858 11.25 11.9634 11.25H9.75V12.25H11.9634C12.4399 12.2516 12.9114 12.1539 13.3479 11.9631C13.7845 11.7723 14.1765 11.4927 14.4991 11.1421C15.1445 10.4481 15.5 9.52778 15.5 8.55059C15.5 6.72444 14.2411 5.2935 12.5 5.04541Z" fill="white" /></svg><svg class="datai" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.82059 2.89809L3.00209 0.0795898L0.183594 2.89809L0.890687 3.60518L2.50209 1.99378V9.49978H3.50209V1.99378L5.1135 3.60518L5.82059 2.89809Z" fill="white" /></svg>Data</a>
                            </li>
                            <li>
                                <a href="home"><svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.875 0.25H1.125C0.959298 0.25019 0.800437 0.3161 0.683268 0.433269C0.566099 0.550438 0.50019 0.709298 0.5 0.875V10.875C0.50019 11.0407 0.566099 11.1996 0.683268 11.3167C0.800437 11.4339 0.959298 11.4998 1.125 11.5H3.875C4.0407 11.4998 4.19956 11.4339 4.31673 11.3167C4.4339 11.1996 4.49981 11.0407 4.5 10.875V0.875C4.49981 0.709298 4.4339 0.550438 4.31673 0.433269C4.19956 0.3161 4.0407 0.25019 3.875 0.25ZM3.5 10.5H1.5V1.25H3.5V10.5Z" fill="white" /></svg><svg class="bar2" width="4" height="9" viewBox="0 0 4 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.375 0.5H0.625C0.459298 0.50019 0.300438 0.5661 0.183269 0.683269C0.0660995 0.800438 0.000190229 0.959298 0 1.125V7.875C0.000190229 8.0407 0.0660995 8.19956 0.183269 8.31673C0.300438 8.4339 0.459298 8.49981 0.625 8.5H3.375C3.5407 8.49981 3.69956 8.4339 3.81673 8.31673C3.9339 8.19956 3.99981 8.0407 4 7.875V1.125C3.99981 0.959298 3.9339 0.800438 3.81673 0.683269C3.69956 0.5661 3.5407 0.50019 3.375 0.5ZM3 7.5H1V1.5H3V7.5Z" fill="white" /></svg><svg class="bar3" width="5" height="16" viewBox="0 0 5 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.875 0.5H1.125C0.959298 0.50019 0.800438 0.566099 0.683269 0.683268C0.5661 0.800437 0.50019 0.959298 0.5 1.125V14.875C0.50019 15.0407 0.5661 15.1996 0.683269 15.3167C0.800438 15.4339 0.959298 15.4998 1.125 15.5H3.875C4.0407 15.4998 4.19956 15.4339 4.31673 15.3167C4.4339 15.1996 4.49981 15.0407 4.5 14.875V1.125C4.49981 0.959298 4.4339 0.800437 4.31673 0.683268C4.19956 0.566099 4.0407 0.50019 3.875 0.5ZM3.5 14.5H1.5V1.5H3.5V14.5Z" fill="white" /></svg>AI</a>
                            </li>
                            <li>
                                <a href="home"><svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.95441 9.88417L7.94369 8.56854L8.71784 7.14923C8.90457 6.79483 9.0024 6.40037 9.00291 5.99979V3.74979C9.00226 2.88736 8.65955 2.06041 8.04996 1.45034C7.44037 0.840275 6.61368 0.496921 5.75125 0.495605C3.96009 0.495605 2.50291 1.95545 2.50291 3.74979V5.99979C2.501 6.40019 2.59775 6.79489 2.78463 7.14901L3.563 8.57601L1.56397 9.88417C1.24147 10.0948 0.976673 10.3826 0.793601 10.7215C0.610529 11.0604 0.51498 11.4396 0.515625 11.8248L0.5 14.4998H11.0029V11.8277C11.0039 11.4421 10.9085 11.0623 10.7254 10.7228C10.5423 10.3834 10.2773 10.0951 9.95441 9.88417ZM10.0029 13.4998H1.50581L1.5155 11.8277C1.51474 11.6082 1.56887 11.3919 1.67297 11.1986C1.77706 11.0053 1.92782 10.841 2.11153 10.7208L4.88284 8.90742L3.6625 6.67017C3.55671 6.4626 3.50199 6.23277 3.50291 5.99979V3.74979C3.50291 3.15306 3.73996 2.58076 4.16192 2.1588C4.58387 1.73685 5.15617 1.49979 5.75291 1.49979C6.34964 1.49979 6.92194 1.73685 7.3439 2.1588C7.76585 2.58076 8.00291 3.15306 8.00291 3.74979V5.99979C8.00281 6.23305 7.94693 6.4629 7.83994 6.67017L6.62381 8.89979L9.40687 10.7209C9.59059 10.8411 9.74134 11.0053 9.84543 11.1986C9.94952 11.3919 10.0037 11.6082 10.0029 11.8278V13.4998Z" fill="white" /></svg> <svg class="last-svg" width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.45491 9.88417L4.44416 8.56854L5.21834 7.14923C5.40507 6.79483 5.5029 6.40037 5.50341 5.99979V3.74979C5.50496 3.11714 5.32173 2.49781 4.9762 1.96784C4.63068 1.43787 4.13791 1.02034 3.5584 0.766524C2.9789 0.512706 2.33788 0.433647 1.71407 0.539056C1.09026 0.644465 0.51081 0.929753 0.046875 1.35989L0.7265 2.09354C1.04797 1.79632 1.44918 1.59935 1.88094 1.5268C2.31271 1.45424 2.75626 1.50925 3.15722 1.68508C3.55818 1.86091 3.89912 2.14992 4.13824 2.51667C4.37736 2.88342 4.50427 3.31198 4.50341 3.74979V5.99979C4.50331 6.23305 4.44743 6.4629 4.34044 6.67017L3.12431 8.89979L5.90737 10.7209C6.09109 10.8411 6.24184 11.0053 6.34593 11.1986C6.45002 11.3919 6.50416 11.6082 6.50341 11.8278V13.4998H4.25341V14.4998H7.50341V11.8277C7.50441 11.4421 7.40903 11.0623 7.22591 10.7228C7.0428 10.3834 6.77777 10.0951 6.45491 9.88417Z" fill="white" /></svg>Teams</a>
                            </li>
                        </ul>


                    </nav>
                    <div className="content">
                        <Page1/>

                    </div>




                </div>

            </div>
        )
    }
}

export default Sidebar