local BaseClass do
    local Module = script.Parent
    if Module then
        BaseClass = require(Module)
    end
end
local InternalClass = BaseClass:Extend({
    Version = 0;
    Object = script;
})
function InternalClass:New(ClassName:String, Name:String)
    local NewClass = BaseClass:New(ClassName)
    NewClass.Name = Name or ClassName
    return self:Extend(NewClass)
end

function InternalClass:Destroy()
    self.Name = nil
    --warn(self.ClassName .." has called Destroy at Internal!")
    BaseClass.Destroy(self)
end

return InternalClass