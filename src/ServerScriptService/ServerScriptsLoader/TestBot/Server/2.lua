local ReplicatedStorage = game:GetService("ReplicatedStorage")
local GlobalModuleName = "Arcaneum"
local ArcaneumGlobals repeat
    ArcaneumGlobals = ReplicatedStorage:FindFirstChild(GlobalModuleName)
    if ArcaneumGlobals == nil then
        task.wait(1)
    else
        ArcaneumGlobals = require(ArcaneumGlobals)
    end
until ArcaneumGlobals ~= nil
local TargetPlayer = ArcaneumGlobals.TestBot.TestPlayer
print("Got TargetPlayer:",TargetPlayer)
local ThisTest = ArcaneumGlobals.ClassFunctions.Tester:New("Client Foundations")
ThisTest:AddTest("TestBotProxy Check", true, "Client")
local ConnectionTest = ThisTest:AddTest("Client Connection Test", true, "Client")
local ClientConnector = ConnectionTest.ClientConnector
ConnectionTest:AddStep("[2]ClientResponseTest",function(HasConnection)
    assert(HasConnection,"Stopped test due to lack of connection.")
    return {
        Message = "Hello World!";
    }
end)
return ThisTest