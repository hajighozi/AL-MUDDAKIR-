-- RBX-02 / Nagari Ilmu: original editable graybox, v0.1
-- Run ONCE in Studio Command Bar in edit mode, in a new private Baseplate.
-- In a new place only, remove its default SpawnLocation manually first.
-- Save the place locally. All generated objects live under Workspace.NagariIlmu.
-- To revise, manually rename the old model before running again. No deletion.
-- Asset register: native Parts, SpawnLocation, BillboardGui, TextLabel and
-- built-in GothamBold font; no imported meshes, images, audio, APKs or asset IDs.
-- Original source authored for this project; no third-party game code.
-- Draft only: no lesson UI, NPC dialogue, player data, networking or publication.
-- Studio runtime tests pending; see Output and test walkable paths in Play mode.
local Workspace = game:GetService("Workspace")
assert(not Workspace:FindFirstChild("NagariIlmu"), "NagariIlmu already exists; rename it before generating a new version.")
local world = Instance.new("Model")
world.Name = "NagariIlmu"
world:SetAttribute("PrototypeVersion", "0.1-RBX02")
local function part(parent, name, size, position, color, material)
    local p = Instance.new("Part")
    p.Name = name
    p.Size = size
    p.Position = position
    p.Anchored = true
    p.Color = color
    p.Material = material or Enum.Material.SmoothPlastic
    p.TopSurface = Enum.SurfaceType.Smooth
    p.BottomSurface = Enum.SurfaceType.Smooth
    p.Parent = parent
    return p
end
local V = Vector3.new
local C = Color3.fromRGB
local stone = C(226,218,193)
local path = C(190,176,147)
local grass = C(110,157,100)
local wood = C(135,89,56)
part(world,"Ground",V(180,1,164),V(0,0.5,0),grass)
part(world,"NorthSouthWalk",V(12,0.2,144),V(0,1.1,0),path)
part(world,"CentralWalk",V(160,0.2,12),V(0,1.1,0),path)
local function sign(parent, name, label, x, z)
    local post = part(parent,name,V(1,6,1),V(x,4,z),wood)
    local gui = Instance.new("BillboardGui")
    gui.Name = "RoomLabel"
    gui.Adornee = post
    gui.Size = UDim2.fromOffset(180,52)
    gui.StudsOffset = V(0,3.8,0)
    gui.MaxDistance = 85
    gui.AlwaysOnTop = false
    gui.Parent = post
    local text = Instance.new("TextLabel")
    text.Size = UDim2.fromScale(1,1)
    text.BackgroundColor3 = C(34,67,52)
    text.BackgroundTransparency = 0.1
    text.TextColor3 = C(255,255,255)
    text.TextWrapped = true
    text.TextScaled = true
    text.Font = Enum.Font.GothamBold
    text.Text = label
    text.Parent = gui
end
local function pavilion(id,label,x,z,accent,w,d)
    local model = Instance.new("Model")
    model.Name = id
    model:SetAttribute("ZoneId",id)
    model.Parent = world
    part(model,"Floor",V(w,0.2,d),V(x,1.1,z),stone)
    for _,dx in ipairs({-w/2+1,w/2-1}) do
        for _,dz in ipairs({-d/2+1,d/2-1}) do
            part(model,"Pillar",V(1.4,8,1.4),V(x+dx,5,z+dz),wood)
        end
    end
    part(model,"Roof",V(w+2,0.8,d+2),V(x,9.4,z),accent)
    -- Two small decorative raised roof bands: graybox, not a literal traditional roof.
    part(model,"RoofRidge",V(w-4,0.6,3),V(x,10.1,z),accent)
    sign(model,"Sign",label,x-w/2+2,z+d/2-2)
    return model
end
pavilion("Welcome","SELAMAT DATANG",0,56,C(56,113,84),30,18)
pavilion("TeacherHall","PILIH KELAS / GURU",0,18,C(55,110,145),30,20)
pavilion("Quran","AL-QURAN",-57,48,C(64,137,108),32,22)
pavilion("Hadis","HADIS",-57,18,C(125,106,154),32,22)
pavilion("Lughah","LUGHAH",-57,-18,C(192,145,73),32,22)
pavilion("Alam","ALAM",57,48,C(89,142,76),32,22)
pavilion("Matematika","MATEMATIKA",57,18,C(64,114,170),32,22)
pavilion("Peradaban","PERADABAN",57,-18,C(166,108,82),32,22)
pavilion("PustakaRehat","PUSTAKA REHAT",-57,-51,C(132,94,70),32,22)
pavilion("Family","RUANG KELUARGA",57,-51,C(114,139,145),32,22)
pavilion("Celebration","PANGGUNG KARYA",0,-51,C(191,151,75),38,24)
-- Spawn is at the south entrance, outside the welcome pavilion.
local spawn = Instance.new("SpawnLocation")
spawn.Name = "EntranceSpawn"
spawn.Size = V(8,0.3,8)
spawn.Position = V(0,1.15,73)
spawn.Anchored = true
spawn.Neutral = true
spawn.Duration = 0
spawn.Color = C(224,192,101)
spawn.Parent = world
world.Parent = Workspace
print("RBX-02: NagariIlmu graybox generated. Save locally; test Play before any publishing.")
