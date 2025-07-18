// ==UserScript==
// @name         Auto Cadastro Completo com Ramal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Cadastro automatizado com base na planilha de ramais CREDINORTE
// @author       Patrão Alex
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const dados = [
    { "ramal": "2026", "nome": "INES JANKOWSKI", "login": "2026", "senha": "Ramal@2026", "email": "ramal2026@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2027", "nome": "MARIA LUCIENE", "login": "2027", "senha": "Ramal@2027", "email": "ramal2027@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2028", "nome": "JOSEMARI NEUMANN DE ALMEIDA", "login": "2028", "senha": "Ramal@2028", "email": "ramal2028@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2029", "nome": "LILIAN CRISTINE FREIRE", "login": "2029", "senha": "Ramal@2029", "email": "ramal2029@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2034", "nome": "LUCAS BELARMINO MENDES", "login": "2034", "senha": "Ramal@2034", "email": "ramal2034@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2038", "nome": "DANIELI SAUER", "login": "2038", "senha": "Ramal@2038", "email": "ramal2038@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2039", "nome": "ALINE SCHELBAUER", "login": "2039", "senha": "Ramal@2039", "email": "ramal2039@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "2040", "nome": "DANIELE PREISLER", "login": "2040", "senha": "Ramal@2040", "email": "ramal2040@credinorte.com.br", "linha": "4736412000" },
    { "ramal": "1120", "nome": "", "login": "1120", "senha": "Ramal@1120", "email": "ramal1120@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1121", "nome": "", "login": "1121", "senha": "Ramal@1121", "email": "ramal1121@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1122", "nome": "", "login": "1122", "senha": "Ramal@1122", "email": "ramal1122@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1123", "nome": "", "login": "1123", "senha": "Ramal@1123", "email": "ramal1123@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1124", "nome": "", "login": "1124", "senha": "Ramal@1124", "email": "ramal1124@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1125", "nome": "", "login": "1125", "senha": "Ramal@1125", "email": "ramal1125@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1126", "nome": "", "login": "1126", "senha": "Ramal@1126", "email": "ramal1126@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1127", "nome": "", "login": "1127", "senha": "Ramal@1127", "email": "ramal1127@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1128", "nome": "", "login": "1128", "senha": "Ramal@1128", "email": "ramal1128@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1130", "nome": "", "login": "1130", "senha": "Ramal@1130", "email": "ramal1130@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1136", "nome": "", "login": "1136", "senha": "Ramal@1136", "email": "ramal1136@credinorte.com.br", "linha": "4736420224" },
    { "ramal": "1420", "nome": "NATI", "login": "1420", "senha": "Ramal@1420", "email": "ramal1420@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1421", "nome": "MICHELE", "login": "1421", "senha": "Ramal@1421", "email": "ramal1421@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1422", "nome": "GENISIS", "login": "1422", "senha": "Ramal@1422", "email": "ramal1422@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1423", "nome": "JULIA", "login": "1423", "senha": "Ramal@1423", "email": "ramal1423@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1425", "nome": "KATIA", "login": "1425", "senha": "Ramal@1425", "email": "ramal1425@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1426", "nome": "FABI", "login": "1426", "senha": "Ramal@1426", "email": "ramal1426@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1427", "nome": "JULI", "login": "1427", "senha": "Ramal@1427", "email": "ramal1427@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1428", "nome": "SABRINA", "login": "1428", "senha": "Ramal@1428", "email": "ramal1428@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1429", "nome": "RENATA B.", "login": "1429", "senha": "Ramal@1429", "email": "ramal1429@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "1430", "nome": "DAI", "login": "1430", "senha": "Ramal@1430", "email": "ramal1430@credinorte.com.br", "linha": "4736335923" },
    { "ramal": "4000", "nome": "Agencia 17", "login": "4000", "senha": "Ramal@4000", "email": "ramal4000@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4001", "nome": "Agencia 17", "login": "4001", "senha": "Ramal@4001", "email": "ramal4001@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4002", "nome": "Agencia 17", "login": "4002", "senha": "Ramal@4002", "email": "ramal4002@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4003", "nome": "Agencia 17", "login": "4003", "senha": "Ramal@4003", "email": "ramal4003@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4004", "nome": "Agencia 17", "login": "4004", "senha": "Ramal@4004", "email": "ramal4004@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4005", "nome": "Agencia 17", "login": "4005", "senha": "Ramal@4005", "email": "ramal4005@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "4006", "nome": "Agencia 17", "login": "4006", "senha": "Ramal@4006", "email": "ramal4006@credinorte.com.br", "linha": "4733715583" },
    { "ramal": "2220", "nome": "APRENDIZ", "login": "2220", "senha": "Ramal@2220", "email": "ramal2220@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2221", "nome": "FRANCIELY - PA22", "login": "2221", "senha": "Ramal@2221", "email": "ramal2221@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2222", "nome": "ATENDIMENTO - PA22", "login": "2222", "senha": "Ramal@2222", "email": "ramal2222@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2223", "nome": "ATENDIMENTO - PA22", "login": "2223", "senha": "Ramal@2223", "email": "ramal2223@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2224", "nome": "ATENDIMENTO - PA22", "login": "2224", "senha": "Ramal@2224", "email": "ramal2224@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2225", "nome": "ATENDIMENTO - PA22", "login": "2225", "senha": "Ramal@2225", "email": "ramal2225@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2226", "nome": "ATENDIMENTO - PA22", "login": "2226", "senha": "Ramal@2226", "email": "ramal2226@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2227", "nome": "RURAL - PA22", "login": "2227", "senha": "Ramal@2227", "email": "ramal2227@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2228", "nome": "MARCELO - PA22", "login": "2228", "senha": "Ramal@2228", "email": "ramal2228@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2229", "nome": "CAIXA - PA22", "login": "2229", "senha": "Ramal@2229", "email": "ramal2229@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2230", "nome": "GERENTE - PA22", "login": "2230", "senha": "Ramal@2230", "email": "ramal2230@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2231", "nome": "SALA DE REUNIÃO - PA22", "login": "2231", "senha": "Ramal@2231", "email": "ramal2231@credinorte.com.br", "linha": "4136321424" },
    { "ramal": "2320", "nome": "ANA", "login": "2320", "senha": "Ramal@2320", "email": "ramal2320@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2321", "nome": "PATRICIA C.", "login": "2321", "senha": "Ramal@2321", "email": "ramal2321@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2322", "nome": "PATRICIA R.", "login": "2322", "senha": "Ramal@2322", "email": "ramal2322@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2323", "nome": "PATRICIA C.", "login": "2323", "senha": "Ramal@2323", "email": "ramal2323@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2324", "nome": "JULIA", "login": "2324", "senha": "Ramal@2324", "email": "ramal2324@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2325", "nome": "LUANA", "login": "2325", "senha": "Ramal@2325", "email": "ramal2325@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2326", "nome": "SALA REUNIAO SBS", "login": "2326", "senha": "Ramal@2326", "email": "ramal2326@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2327", "nome": "THAIZA", "login": "2327", "senha": "Ramal@2327", "email": "ramal2327@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2328", "nome": "DANIELLE", "login": "2328", "senha": "Ramal@2328", "email": "ramal2328@credinorte.com.br", "linha": "4736263824" },
    { "ramal": "2501", "nome": "2501", "login": "2501", "senha": "Ramal@2501", "email": "ramal2501@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2502", "nome": "2502", "login": "2502", "senha": "Ramal@2502", "email": "ramal2502@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2503", "nome": "2503", "login": "2503", "senha": "Ramal@2503", "email": "ramal2503@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2504", "nome": "2504", "login": "2504", "senha": "Ramal@2504", "email": "ramal2504@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2505", "nome": "2505", "login": "2505", "senha": "Ramal@2505", "email": "ramal2505@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2506", "nome": "2506", "login": "2506", "senha": "Ramal@2506", "email": "ramal2506@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2526", "nome": "2526", "login": "2526", "senha": "Ramal@2526", "email": "ramal2526@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2601", "nome": "2601", "login": "2601", "senha": "Ramal@2601", "email": "ramal2601@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2602", "nome": "2602", "login": "2602", "senha": "Ramal@2602", "email": "ramal2602@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2603", "nome": "2603", "login": "2603", "senha": "Ramal@2603", "email": "ramal2603@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2604", "nome": "2604", "login": "2604", "senha": "Ramal@2604", "email": "ramal2604@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2605", "nome": "2605", "login": "2605", "senha": "Ramal@2605", "email": "ramal2605@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2606", "nome": "2606", "login": "2606", "senha": "Ramal@2606", "email": "ramal2606@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2607", "nome": "2607", "login": "2607", "senha": "Ramal@2607", "email": "ramal2607@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "2608", "nome": "2608", "login": "2608", "senha": "Ramal@2608", "email": "ramal2608@credinorte.com.br", "linha": "4137730453" },
    { "ramal": "3700", "nome": "RECEPCAO - SEDE", "login": "3700", "senha": "Ramal@3700", "email": "ramal3700@credinorte.com.br", "linha": "" },
    { "ramal": "3701", "nome": "ANDERSON", "login": "3701", "senha": "Ramal@3701", "email": "ramal3701@credinorte.com.br", "linha": "" },
    { "ramal": "3702", "nome": "BRUNA SCHIAVINI", "login": "3702", "senha": "Ramal@3702", "email": "ramal3702@credinorte.com.br", "linha": "" },
    { "ramal": "3703", "nome": "EDNA", "login": "3703", "senha": "Ramal@3703", "email": "ramal3703@credinorte.com.br", "linha": "" },
    { "ramal": "3704", "nome": "HELEN", "login": "3704", "senha": "Ramal@3704", "email": "ramal3704@credinorte.com.br", "linha": "" },
    { "ramal": "3705", "nome": "ACUCENA", "login": "3705", "senha": "Ramal@3705", "email": "ramal3705@credinorte.com.br", "linha": "" },
    { "ramal": "3706", "nome": "JOHANES", "login": "3706", "senha": "Ramal@3706", "email": "ramal3706@credinorte.com.br", "linha": "" },
    { "ramal": "3707", "nome": "DEIZE", "login": "3707", "senha": "Ramal@3707", "email": "ramal3707@credinorte.com.br", "linha": "" },
    { "ramal": "3708", "nome": "ALEXANDRE LOSS", "login": "3708", "senha": "Ramal@3708", "email": "ramal3708@credinorte.com.br", "linha": "" },
    { "ramal": "3709", "nome": "ALINE STOEBEL", "login": "3709", "senha": "Ramal@3709", "email": "ramal3709@credinorte.com.br", "linha": "" },
    { "ramal": "3710", "nome": "BIANCA", "login": "3710", "senha": "Ramal@3710", "email": "ramal3710@credinorte.com.br", "linha": "" },
    { "ramal": "3711", "nome": "ILEANA", "login": "3711", "senha": "Ramal@3711", "email": "ramal3711@credinorte.com.br", "linha": "" },
    { "ramal": "3712", "nome": "TAMIRES", "login": "3712", "senha": "Ramal@3712", "email": "ramal3712@credinorte.com.br", "linha": "" },
    { "ramal": "3713", "nome": "MICHELE", "login": "3713", "senha": "Ramal@3713", "email": "ramal3713@credinorte.com.br", "linha": "" },
    { "ramal": "3714", "nome": "JULIANA", "login": "3714", "senha": "Ramal@3714", "email": "ramal3714@credinorte.com.br", "linha": "" },
    { "ramal": "3715", "nome": "ADRIELE", "login": "3715", "senha": "Ramal@3715", "email": "ramal3715@credinorte.com.br", "linha": "" },
    { "ramal": "3716", "nome": "VIVIANE TRAIN", "login": "3716", "senha": "Ramal@3716", "email": "ramal3716@credinorte.com.br", "linha": "" },
    { "ramal": "3717", "nome": "ANDREA ALVES", "login": "3717", "senha": "Ramal@3717", "email": "ramal3717@credinorte.com.br", "linha": "" },
    { "ramal": "3718", "nome": "DAYANE", "login": "3718", "senha": "Ramal@3718", "email": "ramal3718@credinorte.com.br", "linha": "" },
    { "ramal": "3719", "nome": "DIANA", "login": "3719", "senha": "Ramal@3719", "email": "ramal3719@credinorte.com.br", "linha": "" },
    { "ramal": "3720", "nome": "FABIANA SIMETTE", "login": "3720", "senha": "Ramal@3720", "email": "ramal3720@credinorte.com.br", "linha": "" },
    { "ramal": "3721", "nome": "BRUNA STEIDEL", "login": "3721", "senha": "Ramal@3721", "email": "ramal3721@credinorte.com.br", "linha": "" },
    { "ramal": "3722", "nome": "PATRICIA STOLZ", "login": "3722", "senha": "Ramal@3722", "email": "ramal3722@credinorte.com.br", "linha": "" },
    { "ramal": "3723", "nome": "MARCIA SILVA", "login": "3723", "senha": "Ramal@3723", "email": "ramal3723@credinorte.com.br", "linha": "" },
    { "ramal": "3724", "nome": "RAQUEL", "login": "3724", "senha": "Ramal@3724", "email": "ramal3724@credinorte.com.br", "linha": "" },
    { "ramal": "3725", "nome": "ROSILEINE RODRIGUES", "login": "3725", "senha": "Ramal@3725", "email": "ramal3725@credinorte.com.br", "linha": "" },
    { "ramal": "3726", "nome": "PATRICIA MENDES", "login": "3726", "senha": "Ramal@3726", "email": "ramal3726@credinorte.com.br", "linha": "" },
    { "ramal": "3727", "nome": "FERNANDA STROBEL", "login": "3727", "senha": "Ramal@3727", "email": "ramal3727@credinorte.com.br", "linha": "" },
    { "ramal": "3728", "nome": "TATIANE", "login": "3728", "senha": "Ramal@3728", "email": "ramal3728@credinorte.com.br", "linha": "" },
    { "ramal": "3729", "nome": "JULIANA", "login": "3729", "senha": "Ramal@3729", "email": "ramal3729@credinorte.com.br", "linha": "" },
    { "ramal": "3730", "nome": "ELIZANGELA STAIDEL", "login": "3730", "senha": "Ramal@3730", "email": "ramal3730@credinorte.com.br", "linha": "" },
    { "ramal": "3731", "nome": "PATRICIA DE ANDRADE", "login": "3731", "senha": "Ramal@3731", "email": "ramal3731@credinorte.com.br", "linha": "" },
    { "ramal": "3732", "nome": "LETICIA APARECIDA", "login": "3732", "senha": "Ramal@3732", "email": "ramal3732@credinorte.com.br", "linha": "" },
    { "ramal": "3734", "nome": "ALINE SOUSA", "login": "3734", "senha": "Ramal@3734", "email": "ramal3734@credinorte.com.br", "linha": "" },
    { "ramal": "3735", "nome": "SALA CONSELHO", "login": "3735", "senha": "Ramal@3735", "email": "ramal3735@credinorte.com.br", "linha": "" },
    { "ramal": "3736", "nome": "SALA COMITÊ", "login": "3736", "senha": "Ramal@3736", "email": "ramal3736@credinorte.com.br", "linha": "" },
    { "ramal": "3737", "nome": "WIGBERTO", "login": "3737", "senha": "Ramal@3737", "email": "ramal3737@credinorte.com.br", "linha": "" },
    { "ramal": "3738", "nome": "RAUL KEINE", "login": "3738", "senha": "Ramal@3738", "email": "ramal3738@credinorte.com.br", "linha": "" },
    { "ramal": "3739", "nome": "NELI", "login": "3739", "senha": "Ramal@3739", "email": "ramal3739@credinorte.com.br", "linha": "" },
    { "ramal": "3740", "nome": "HELOISA FALARZ MENDES", "login": "3740", "senha": "Ramal@3740", "email": "ramal3740@credinorte.com.br", "linha": "" },
    { "ramal": "3741", "nome": "MARIA GREIN", "login": "3741", "senha": "Ramal@3741", "email": "ramal3741@credinorte.com.br", "linha": "" },
    { "ramal": "3742", "nome": "DJENIFER", "login": "3742", "senha": "Ramal@3742", "email": "ramal3742@credinorte.com.br", "linha": "" },
    { "ramal": "3743", "nome": "EDIMARA ADÃO", "login": "3743", "senha": "Ramal@3743", "email": "ramal3743@credinorte.com.br", "linha": "" },
    { "ramal": "3744", "nome": "MARIANA", "login": "3744", "senha": "Ramal@3744", "email": "ramal3744@credinorte.com.br", "linha": "" },
    { "ramal": "3745", "nome": "DANIELE KUSS", "login": "3745", "senha": "Ramal@3745", "email": "ramal3745@credinorte.com.br", "linha": "" },
    { "ramal": "3746", "nome": "ANDRESSA", "login": "3746", "senha": "Ramal@3746", "email": "ramal3746@credinorte.com.br", "linha": "" },
    { "ramal": "3747", "nome": "JOAO CARLOS DE LIMA", "login": "3747", "senha": "Ramal@3747", "email": "ramal3747@credinorte.com.br", "linha": "" },
    { "ramal": "3748", "nome": "OSVALDO", "login": "3748", "senha": "Ramal@3748", "email": "ramal3748@credinorte.com.br", "linha": "" },
    { "ramal": "3749", "nome": "LETIANE", "login": "3749", "senha": "Ramal@3749", "email": "ramal3749@credinorte.com.br", "linha": "" },
    { "ramal": "3750", "nome": "KARINA", "login": "3750", "senha": "Ramal@3750", "email": "ramal3750@credinorte.com.br", "linha": "" },
    { "ramal": "3751", "nome": "MAYLLA", "login": "3751", "senha": "Ramal@3751", "email": "ramal3751@credinorte.com.br", "linha": "" },
    { "ramal": "3752", "nome": "DIEGO", "login": "3752", "senha": "Ramal@3752", "email": "ramal3752@credinorte.com.br", "linha": "" },
    { "ramal": "3753", "nome": "FERNANDO", "login": "3753", "senha": "Ramal@3753", "email": "ramal3753@credinorte.com.br", "linha": "" },
    { "ramal": "3754", "nome": "JULIANA STOCK", "login": "3754", "senha": "Ramal@3754", "email": "ramal3754@credinorte.com.br", "linha": "" },
    { "ramal": "3755", "nome": "LETICIA R.", "login": "3755", "senha": "Ramal@3755", "email": "ramal3755@credinorte.com.br", "linha": "" },
    { "ramal": "3756", "nome": "LEILIANE", "login": "3756", "senha": "Ramal@3756", "email": "ramal3756@credinorte.com.br", "linha": "" },
    { "ramal": "3757", "nome": "BIANCA MULLER", "login": "3757", "senha": "Ramal@3757", "email": "ramal3757@credinorte.com.br", "linha": "" },
    { "ramal": "3758", "nome": "GABRIEL RODRIGUES", "login": "3758", "senha": "Ramal@3758", "email": "ramal3758@credinorte.com.br", "linha": "" },
    { "ramal": "3759", "nome": "MARIANA", "login": "3759", "senha": "Ramal@3759", "email": "ramal3759@credinorte.com.br", "linha": "" },
    { "ramal": "3760", "nome": "LILIAN MOREIRA", "login": "3760", "senha": "Ramal@3760", "email": "ramal3760@credinorte.com.br", "linha": "" },
    { "ramal": "3768", "nome": "BIANCA SCHREINER", "login": "3768", "senha": "Ramal@3768", "email": "ramal3768@credinorte.com.br", "linha": "" },
    { "ramal": "3770", "nome": "CRISTIANE", "login": "3770", "senha": "Ramal@3770", "email": "ramal3770@credinorte.com.br", "linha": "" },
    { "ramal": "3771", "nome": "JANAINA GRAVUNSKI", "login": "3771", "senha": "Ramal@3771", "email": "ramal3771@credinorte.com.br", "linha": "" },
    { "ramal": "3772", "nome": "BRUNO WAGNER", "login": "3772", "senha": "Ramal@3772", "email": "ramal3772@credinorte.com.br", "linha": "" },
    { "ramal": "3773", "nome": "MARIA ALVES", "login": "3773", "senha": "Ramal@3773", "email": "ramal3773@credinorte.com.br", "linha": "" },
    { "ramal": "3775", "nome": "TAINA", "login": "3775", "senha": "Ramal@3775", "email": "ramal3775@credinorte.com.br", "linha": "" },
    { "ramal": "3776", "nome": "BRUNA - RECUPERACAO", "login": "3776", "senha": "Ramal@3776", "email": "ramal3776@credinorte.com.br", "linha": "" },
    { "ramal": "3777", "nome": "3777", "login": "3777", "senha": "Ramal@3777", "email": "ramal3777@credinorte.com.br", "linha": "" },
    { "ramal": "3778", "nome": "3778", "login": "3778", "senha": "Ramal@3778", "email": "ramal3778@credinorte.com.br", "linha": "" },
    { "ramal": "3780", "nome": "LUIS", "login": "3780", "senha": "Ramal@3780", "email": "ramal3780@credinorte.com.br", "linha": "" },
    { "ramal": "3781", "nome": "JOÃO", "login": "3781", "senha": "Ramal@3781", "email": "ramal3781@credinorte.com.br", "linha": "" },
    { "ramal": "3782", "nome": "THAIS", "login": "3782", "senha": "Ramal@3782", "email": "ramal3782@credinorte.com.br", "linha": "" },
    { "ramal": "3783", "nome": "MANOELA", "login": "3783", "senha": "Ramal@3783", "email": "ramal3783@credinorte.com.br", "linha": "" },
    { "ramal": "3784", "nome": "ANDRESSA OLIVEIRA", "login": "3784", "senha": "Ramal@3784", "email": "ramal3784@credinorte.com.br", "linha": "" },
    { "ramal": "3785", "nome": "JEANE", "login": "3785", "senha": "Ramal@3785", "email": "ramal3785@credinorte.com.br", "linha": "" },
    { "ramal": "3786", "nome": "ANGELITA", "login": "3786", "senha": "Ramal@3786", "email": "ramal3786@credinorte.com.br", "linha": "" },
    { "ramal": "9999", "nome": "Teste", "login": "9999", "senha": "Ramal@9999", "email": "ramal9999@credinorte.com.br", "linha": "" }
];

    let index = 0;
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function preencherCampos() {
        if (index >= dados.length) {
            console.log("✅ Todos os cadastros foram finalizados!");
            return;
        }

        const item = dados[index];
        console.log(`➡️ Cadastrando ${item.nome} (${item.ramal})`);

        // Etapa 1: Clique no botão de adicionar
        const addBtn = [...document.querySelectorAll('mat-icon')].find(e => e.textContent.trim() === "add_circle_outline");
        if (!addBtn) return console.error("❌ Botão de adicionar não encontrado.");
        addBtn.click();
        await delay(1000);

        // Nome (firstName) = Ramal
        document.querySelector('input[formcontrolname="firstName"]').value = item.ramal;
        document.querySelector('input[formcontrolname="firstName"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Sobrenome (lastName) = Nome
        document.querySelector('input[formcontrolname="lastName"]').value = item.nome;
        document.querySelector('input[formcontrolname="lastName"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Login = Ramal
        document.querySelector('input[formcontrolname="username"]').value = item.ramal;
        document.querySelector('input[formcontrolname="username"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Email
        document.querySelector('input[formcontrolname="email"]').value = item.email;
        document.querySelector('input[formcontrolname="email"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Senha
        document.querySelector('input[formcontrolname="password"]').value = item.senha;
        document.querySelector('input[formcontrolname="password"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Seletor "Plano de Perfil"
        document.querySelector('mat-select[formcontrolname="profilePlanId"]').click();
        await delay(500);
        const options = document.querySelectorAll('mat-option');
        if (options[3]) options[3].click(); // terceira opção = advanced
        else console.warn("⚠️ Opção 'advanced' não encontrada.");
        await delay(500);

        // Botão "Próximo"
        const btnProximo = [...document.querySelectorAll('span.mat-button-wrapper')].find(el => el.textContent.trim() === "Próximo");
        if (btnProximo) btnProximo.click();
        await delay(1000);

        // DDD
        document.querySelector('input[formcontrolname="areaCode"]').value = "47";
        document.querySelector('input[formcontrolname="areaCode"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Número
        document.querySelector('input[formcontrolname="number"]').value = item.ramal;
        document.querySelector('input[formcontrolname="number"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Senha novamente
        document.querySelector('input[formcontrolname="extensionPassword"]').value = item.senha;
        document.querySelector('input[formcontrolname="extensionPassword"]').dispatchEvent(new Event('input', { bubbles: true }));

        // Botão final "Salvar"
        const btnSalvar = [...document.querySelectorAll('span.mat-button-wrapper')].find(el => el.textContent.trim() === "Salvar");
        if (btnSalvar) btnSalvar.click();
        else console.warn("⚠️ Botão 'Salvar' não encontrado");

        index++;
        await delay(2500);
        preencherCampos();
    }

    window.addEventListener('load', () => {
        setTimeout(() => {
            preencherCampos();
        }, 3000);
    });
})();
