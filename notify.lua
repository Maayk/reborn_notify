RegisterNetEvent('reborn:notify:send')
AddEventHandler('reborn:notify:send', function(ntitulo,nmensagem,ntipo,ntempo)
     local tipo = {
          sucesso = "fa-check",
          trofeu = "fa-trophy",
          erro = "fa-times",
          info = "fa-exclamation",
          semstress = "fa-smile-wink",
          comstress = "fa-tired",
          vida = "fa-heartbeat",
          gps = "fa-location-arrow",
     }
	SendNUIMessage({
	  style = ntipo,
		titulo = ntitulo,
		mensagem = nmensagem,
		tipo = tipo[ntipo],
		tempo = ntempo
	})
end)
--xD
