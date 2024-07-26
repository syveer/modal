// Componenta ScreensPage utilizează react-redux pentru a interacționa cu starea aplicației.
// 	•	Folosește useSelector pentru a extrage date din starea Redux și useDispatch pentru a trimite acțiuni.
// 	•	Include o funcționalitate de închidere a meniului când utilizatorul face clic pe ecran.
// 	•	Componentele HeaderDashboard și MainDashboard sunt incluse în layout-ul componentei.
// Componenta returnează un element Wrapper care ar trebui sa conțina
// 	•	onClick={handleScreenClick}: când utilizatorul face clic pe Wrapper, handleScreenClick este apelată.
// 	•	bgcUrl={currentBg}: setarea URL-ului pentru fundal.
// 	•	isOpen={menuMode}: indicarea dacă meniul este deschis.
// 	•	HeaderDashboard care primește currentName ca prop children.
// 	•	MainDashboard care este o altă componentă ce este afișată în interiorul Wrapper.
