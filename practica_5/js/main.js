
//DEFINICIÓN DE VARIABLES (APARTADOS)
//cada una de las cuatro variables es una sección del primer apartado de la web
var home = document.getElementById('home');
var types = document.getElementById('types');
var places = document.getElementById('places');
var facts = document.getElementById('facts');

//DEFINICIÓN DE VARIABLES (TRIGGERS)
//cada una de las cuatro variables es un trigger que activará una función
var btn_home = document.getElementById('button_home');
var btn_types = document.getElementById('button_types');
var btn_places = document.getElementById('button_places');
var btn_facts = document.getElementById('button_facts');

//DEFINICIÓN DE FUNCIONES
//cada función cambia el display de uno de los apartados a "flex", y el resto a "none", cambiando
//el color de cada boton respectivamente el color de los botones para que asemejen activos.
function go_home(){
    home.style.display = 'flex';
    btn_home.style.background = '#025d55e1';
    types.style.display = 'none';
    btn_types.style.background = '#025d55';
    places.style.display = 'none';
    btn_places.style.background = '#025d55';
    facts.style.display = 'none';
    btn_facts.style.background = '#025d55'; 
}
function go_types(){
    home.style.display = 'none';
    btn_home.style.background = '#025D55';
    types.style.display = 'flex';
    btn_types.style.background = '#025d55e1';
    places.style.display = 'none';
    btn_places.style.background = '#025d55';
    facts.style.display = 'none';
    btn_facts.style.background = '#025d55';
}
function go_places(){
    home.style.display = 'none';
    btn_home.style.background = '#025d55';
    types.style.display = 'none';
    btn_types.style.background = '#025d55';
    places.style.display = 'flex';
    btn_places.style.background = '#025d55e1';
    facts.style.display = 'none';
    btn_facts.style.background = '#025d55';
}
function go_facts(){
    home.style.display = 'none';
    btn_home.style.background = '#025d55';
    types.style.display = 'none';
    btn_types.style.background = '#025d55';
    places.style.display = 'none';
    btn_places.style.background = '#025d55';
    facts.style.display = 'flex';
    btn_facts.style.background = '#025d55e1';
}