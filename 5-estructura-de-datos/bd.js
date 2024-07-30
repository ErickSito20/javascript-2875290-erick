let peliculas = [ 
    { 
        id:1,
        nombre:'Popotão Grandão',
        artista:'Mc Neguinho do ITR',
        year:2018,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/wXEO5cTATI8Wqvaoj3__6gjB8IJ6sbYTWzeSZDLW1231PJZHnC5PwqaZ89WtjltWR_4qV2iypUCEB5E=w544-h544-l90-rj'
    },
    {
        id:2,
        nombre:'Joga O Bum Bum Tam Tam',
        artista:'MC Fioti',
        year:2017,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/3um08EoiKPwYasEPqvOD7SoZXVX8lDbcGR2-_Im6HECI52Lr59qx7TMN5SY2S1wepY9HTf62hy6uGBo=w544-h544-l90-rj'
    },
    {
        id:3,
        nombre:'Fuleragem',
        artista:'MC WM',
        year:2018,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/u3ZYHijLOOU6agocXq78c9VdeAXfwPxq-8Iw2GQ5JiNQmx7nXt8hfsTwunHQyrBfguNfoJVCTwnWn3w=w544-h544-l90-rj'
    },
    {
        id:4,
        nombre:'Parado no Bailão',
        artista:[
          'MC L Da Vinte','MC Gury'
        ],
        year:2018,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/Ov_fzqTYjq5YtiJBASKrLRBf--I7DV62F4DAGdyJu2ImdAHrEx1W8Zp_8mqlEkgQeuMs5WfrbqCBJ1Qs=w544-h544-l90-rj'
    },
    {
        id:5,
        nombre:'Sua amiga vou sarrar',
        artista:'MC Levin',
        year:2019,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/0vM7V7Bdi5hQDd6wCNh6jBk92GpdQigPHJWebQtleVCqrK82hQVA4U-A62o0twXzmXsdjKm7SLclQnE=w544-h544-l90-rj'
    },
    {
        id:6,
        nombre:'Tá OK (Remix)',
        artista:[
            'DENNIS', 
            'MC Kevin o Chris', 
            'Karol G',
            'maluma',
          ],
        year:2023,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/GNZT395BOXhia8oHSpGAHTOqIDrMwnPEbqmMAZlInC5pu8Gj0ilpUy6MorqqZ_3WDrR9LYQprkfjcMe9=w544-h544-l90-rj'
    },
    {
        id:7,
        nombre:'Rebola Sem Sentimento',
        artista:['MC Doni','MC JottaPê'],
        year:2021,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/e-mrOc5S5zNMQfx3bW4T5EnZATCUVx9FOjyeSlW2uBHF8Hsfb8tAeI9WraYnOyxqbCLO-6AD6ZLf9YZb=w544-h544-l90-rj'
    },
    {
        id:8,
        nombre:'Pode Se Soltar',
        artista:'Jerry Smith',
        year:2017,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/5bOrsLzGukmU-uL-LR8nNH7EyQs5rNXBFtF_W397o1hqgcpIBxoAd4nL9f4bVj5e1gPp_GoQwvjxAvBE=w544-h544-l90-rj'
    },
    {
        id:9,
        nombre:'Sua amiga deu',
        artista:'MC Levin',
        year: 2019,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/0-A1K8zfQEAxirSZdUUuY8aBi54-3I5KJ53PvHRfas1QcYaiVR66yPKDisyWrwAreF1wjDdLcBT96ctb=w544-h544-l90-rj'
    },
    {
        id:10,
        nombre:'Turutum',
        artista:'MC Kevinho',
        year:2016,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/1rs3j6OINPmQEu97mv624AQ0gDex-Cs6LreFcEmxm90RTZQJG7TSRT7zUiLit-hw1-fVyzj2ycOT3gTe=w544-h544-l90-rj'
    },
    {
        id:11,
        nombre:'Fazer Falta',
        artista:'MC Livinho',
        year:2016,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/Riqjz21CQIXGq86ZZbyX209_TzyRfjtT-JS7uBivmNeD9cRnaQUv4zPGUN0Qpqk4HxgKnNejtECElLQeRg=w544-h544-l90-rj'
    },
    {
        id:12,
        nombre:'Quem Mando Tu Terminar? (To Bonito To Né?)',
        artista:'MC Kekel',
        year:2017,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/BBW_2rIhxVG5LzeyOml1GKOC9e3nTtE9U2I4FDag1Uqzdy2M9HBGsynCyfbUlMWRM03FsFSdESCHzLSiLQ=w544-h544-l90-rj'
    },
    {
        id:13,
        nombre:'Rabetão',
        artista:'MC Lan',
        year:2017,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/lYYwRjeKc0M4ZpU3oZQt9UN9P_WTYqrG-PwD74E559fJFGfh8ynBrqT9oAjtrFiEcr2ZO2MRcuWEckA=w544-h544-l90-rj'
    },
    {
        id:14,
        nombre:'Acompanha o Grave',
        artista:['MC Lele','MC Maromba'],
        year:2015,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/hXHN6Gb8GL8CqtBLdKh5zdsfTEJnFke8IOD5tbrmaZFl8CidnwqVCSZDu_jBalteBoJ71cUCKWZJlXs=w544-h544-l90-rj'
    },
    {
        id:15,
        nombre:'Agora Vai Sentar',
        artista:['MCs Jhowzinho','Kadinho'],
        year:2018,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/z4SRrL0Bk2VCQeaZdGWrfifhAVR86KRtBnECl1szu9PZN-FmrUbaFKYvYr8VDDSlyzZIxwm7ahCScvEg=w544-h544-l90-rj'
    },
    {
        id:16,
        nombre:'Oh Nanana',
        artista:'Bonde R300',
        year:2017,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/H04Ar6d4pl7vUqGRpaqWrTfnd4rdfphDXKQBm6u9mpVuR2Bth3alNkzgH_KEXeEpi3wilLZ_zxxHum9jkA=w544-h544-l90-rj'
    },
    {
        id:17,
        nombre:'Ela me Falou Que Quer Rave',
        artista:['MC Levin','DJ Nikolas Alves Exclusive', 'DJ Kaioken','DJ Gege',],
        year:2021,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/jCkUAhBrAQuBgQRoG9aKTf4m5SSSQTrJaptBMD9kvEg-QmUKVluJknEunMijDHswHsRcrDXCzNNKlQ9I=w544-h544-l90-rj'
    },
    {
        id:18,
        nombre:'VȺMѲ TѲMȺ UMȺ - VERSÃO FUNK',
        artista:'Mello DJ',
        year:2023,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/RykfHdYXjQk_mTCnKMGzvATWODmvnr1qNeqhRcsh18GAWIsCuxHnGvss6jEL5DOJocASa4Jw0k6zWrKp=w544-h544-l90-rj'
    },
    {
        id:19,
        nombre:'Tô Apaixonado Nessa Mina',
        artista:'MC Kevinho',
        year:2017,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/dtSUYl59u-y0IXpK1qxKbR3BzG7uz1WPFyy2ujVd1D7GEJobp0YxYpPeqdXF8miyWJGpAk8GQPE8Zu8f=w544-h544-l90-rj'
    },
    {
        id:20,
        nombre:'Hoje Eu Vou Parar Na Gaiola',
        artista:['Renan da penha','MC Levinho'],
        year:2018,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/jXTWGRQ6KUSHxUU26upP_ccY7JAIgHzwY7XwHvYEWMRmRu3JzozJyEEqSHZm6-LST36xEWK2h-GMLgXt=w544-h544-l90-rj'
    },
    {
        id:21,
        nombre:'Baile do Cinga do 12',
        artista:['MC contijo', 'DJ Sati Marconex'],
        year:2020,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/Vkz61wsGM-VrUxl1lOrheekJa_3Fba8OgPaChVfF1td4e2U9cZjTiV9FnwM73HYT0LWa-m8pCw8TptfuNg=w544-h544-l90-rj'
    },
    {
        id:22,
        nombre:'Essas Malandras',
        artista:'Dj Galinha',
        year:2018,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/4fmzavH5x6DLD7V6be39iXy-BmoLu1B9v0ftpe6x3ePbH7VSyrvg2Bwc9AkZhEjOFXiSk5IHBM6BBbUT=w544-h544-l90-rj'
    },
    {
        id:23,
        nombre: 'Baile do Bruxo',
        artista: ['Tropa do Bruxo','DJ Ws da Igrejinha','SMU', 'Triz'],
        year:2023,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/wereiLcSSG0uTaC6l-fQyO9esQoPxHoSp9P3koK3CaK9aZK2zVtjmZhCA_joDZ-KVFKMRe2RTCF5Op55qw=w544-h544-l90-rj'
    },
    {
        id:24,
        nombre:'Ô Moça',
        artista: 'MC Zequin',
        year: 2020,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/1k1_BmyNbfQ_QlzdTw95IZe2ZegD5Ex4U2V7Sd7TB_CSxvVWl5F6hGXuYegkasl-ebeNzE1_HbCGrYLJ=w544-h544-l90-rj'
    },
    {
        id:25,
        nombre:'Namorar pra Quê?​',
        artista:'MC Kelel',
        year:2016,
        genero:'funk',
        imagen: 'https://lh3.googleusercontent.com/1_XBO3msMQwdcXj7CNUCKWw6Tv4hF6Zgo2E4CAoCeyMTEbnQenZBOYiXxtR4AJkmLpBDN9MRSdmu3mm9=w544-h544-l90-rj'
    },
    {
        id:26,
        nombre: 'Fuga Na Dona de Casa',
        artista: 'MC levin',
        year: 2019,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/SPS6dNHSEbPQnodv5zQVOxIEouF-XIuYzv9lboV4gQvnSLIGdhPirmacqIR-crMvbDVP2T3ZSAfJipPRcg=w544-h544-l90-rj'
    },
    {
        id:27,
        nombre:'Danadinha (con Mc Meno K y Mc Cria)',
        artista: 'DJ Neeh',
        year: 2023,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/F3DVhhX5HNiRs0ZaawsctJGlIht1-LIpuBBujjOEo3_323JKg6Vuv6Irqn3TsQggWhqzwKJuEPgqqm7v=w544-h544-l90-rj'
    },
    {
        id:28,
        nombre:'Amiga da Minha Mulher',
        artista: 'Seu jorge',
        year:2011,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/0fay9JxnfNq2YyTmbDSaf6mOsmLyTX8pnzKk6CNex3HRvqIjR-CvTwQGO22XxgtvAsGiholT7T6l9PE=w544-h544-l90-rj'
    },
    {
        id:29,
        nombre:'Correndo Atrás de Festa (con Bero Costa DJ y DJ EDIN)',
        artista:['Tibery', 'Dj Gv de Campos','AZE'],
        year:2023,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/KVFnDoQ9_QottS0lt4FM1QkGHRdOPiM3qQPv7XMWQV3uQO1GUSwxWstOjWjo-0mWbN2Hm3Z6c9PIybSH=w544-h544-l90-rj'
    },
    {
        id:30,
        nombre:'Meninos Do Favela (con Fausti Bo)',
        artista:['MC Hernan do Brasil',  'DJ Pequenho'],
        year:2024,
        genero:'funk',
        imagen:'https://lh3.googleusercontent.com/wPMNoYc8hGZIGJYMNMyzYig9uC-_MWbHzOXTLVpYCXnP3g8j2zUD2s2plZcNmk2ykrkb63APLdsJZaw=w544-h544-l90-rj'
    }
    
]