

Citizen.CreateThread(function()
    while true do
        local ped = PlayerPedId()
        local isInVehicle = IsPedInAnyVehicle(ped, false)
        local isBelt = false
        Citizen.Wait(100)

        if isInVehicle and not IsPauseMenuActive() then
            Citizen.Wait(10)
            local veh = GetVehiclePedIsIn(ped, false)
            local speed = GetEntitySpeed(veh) * 3.6
            local fuel = GetVehicleFuelLevel(veh)
            local gear = GetVehicleCurrentGear(veh)
            local engine = GetVehicleEngineHealth(veh)

            SendNUIMessage ({
                isInVehicle = isInVehicle;
                speed = speed;
                fuel = fuel;
                gear = gear;
                engine = engine;
            });
        else
            SendNUIMessage({
                isInVehicle = false;
            });
        end

    end
end)

Citizen.CreateThread(function()

end)