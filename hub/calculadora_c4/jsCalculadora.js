// $(document).ready(function () {
//     // $("#b_um").on("click", function () {
//     //     // var h6_tela = $("#tela_numero");
//     //     var btn = $("#b_soma").val();
//     //     var t_val = $("#tela_numero_1").val();
//     //     var valor = t_val + btn;
//     //     // h6_tela.empty();
//     //     // h6_tela.append(valor);
//     //     document.getElementById("tela_numero_1").value = valor;
//     // });
// });


function calcular(calc){
    var input_num_um = document.getElementById('tela_numero_1');
    var input_num_dois = document.getElementById('tela_numero_2');
    var button_soma = document.getElementById('b_soma');
    var button_sub = document.getElementById('b_sub');
    var button_div = document.getElementById('b_div');
    var button_mult = document.getElementById('b_mult');
    var resultado = $("#resultado_text");
    resultado.empty();
    if(input_num_um.value != "" && input_num_dois.value != ""){
        if(input_num_um.value != "0" || input_num_dois.value != "0"){
            input_num_um.classList.add('correto');
            input_num_dois.classList.add('correto');
            input_num_um.classList.remove('erro');
            input_num_dois.classList.remove('erro');
            button_soma.classList.remove('button_erro');
            button_sub.classList.remove('button_erro');
            button_div.classList.remove('button_erro');
            button_mult.classList.remove('button_erro');
            var teste = input_num_um.value + " " + calc + " " + input_num_dois.value;
            if(eval(teste) == "Infinity"){
                input_num_um.classList.remove('correto');
                input_num_dois.classList.remove('correto');
                input_num_um.classList.add('erro');
                input_num_dois.classList.add('erro');
                button_soma.classList.add('button_erro');
                button_sub.classList.add('button_erro');
                button_div.classList.add('button_erro');
                button_mult.classList.add('button_erro');
            }
            resultado.append(eval(teste));
        }else{
            desligar();
        }
        
    }else{
        desligar();
    }
    
};

function desligar(){
    var input_num_um = document.getElementById('tela_numero_1');
    var input_num_dois = document.getElementById('tela_numero_2');
    var button_soma = document.getElementById('b_soma');
    var button_sub = document.getElementById('b_sub');
    var button_div = document.getElementById('b_div');
    var button_mult = document.getElementById('b_mult');
    var resultado = $("#resultado_text");
    resultado.empty();
    input_num_um.classList.remove('correto');
    input_num_dois.classList.remove('correto');
    input_num_um.classList.remove('erro');
    input_num_dois.classList.remove('erro');
    button_soma.classList.remove('button_erro');
    button_sub.classList.remove('button_erro');
    button_div.classList.remove('button_erro');
    button_mult.classList.remove('button_erro');
    input_num_um.value = "";
    input_num_dois.value = "";
    resultado.append(0);
};