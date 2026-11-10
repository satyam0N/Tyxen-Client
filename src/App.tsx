import { useState } from "react";
import { ChamferButton } from "./components/ChamferButton";
import { ChamferCard } from "./components/ChamferCard";
import { SegmentBar } from "./components/SegmentBar";
import { RailButton } from "./components/RailButton";
import { Chip } from "./components/Chip";
import { Dialog } from "./components/Dialog";
import { Dropdown } from "./components/Dropdown";
import { Toast } from "./components/Toast";
import { TitleBar } from "./components/TitleBar";
import { Home, Layers, Settings, User, Boxes } from "lucide-react";

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("1.21.4 v");

  return (
    <div className="min-h-screen flex flex-col bg-ground text-text overflow-hidden">
      <TitleBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Rail */}
        <div className="w-[76px] bg-ground border-r-2 border-borders flex flex-col items-center py-6 gap-4">
          <div className="w-12 h-12 bg-accent text-ground flex items-center justify-center font-bold text-2xl mb-4" style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
            T
          </div>
          <RailButton icon={Home} active={true} />
          <RailButton icon={Boxes} />
          <RailButton icon={Layers} />
          <RailButton icon={User} />
          <div className="mt-auto">
            <RailButton icon={Settings} />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-12 pb-12">

            <header className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold tracking-wider">TYXEN</h1>
                <p className="text-muted font-mono text-sm uppercase tracking-wider mt-1">Launcher 1.0 / Ready</p>
              </div>
              <ChamferCard chamferSize="sm" className="px-4 py-2 flex items-center gap-3">
                <div className="w-3 h-3 bg-accent" />
                <span className="font-bold text-sm">Steve_Dev</span>
                <span className="font-mono text-xs text-accent uppercase">Online</span>
              </ChamferCard>
            </header>

            <section>
              <h2 className="text-xl font-bold mb-4 text-muted uppercase tracking-wider">Hero Card Demo</h2>
              <ChamferCard chamferSize="hero" className="p-8 pb-10 min-h-[280px] flex flex-col relative overflow-visible">
                <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none flex items-end">
                  <div className="w-16 h-48 bg-text ml-2"></div>
                  <div className="w-16 h-64 bg-text ml-2"></div>
                  <div className="w-16 h-32 bg-text ml-2"></div>
                  <div className="w-24 h-80 bg-text ml-2"></div>
                  <div className="w-16 h-56 bg-text ml-2"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex gap-2 font-mono text-xs font-bold text-accent mb-2 tracking-wider">
                    <span>FABRIC</span> / <span>1.21.4</span> / <span>JAVA 21</span>
                  </div>
                  <h2 className="text-5xl font-bold mb-2">Survival World</h2>
                  <p className="text-muted text-sm">Last played yesterday. 128 mods, 4 GB RAM.</p>
                </div>

                <div className="mt-auto flex gap-4 items-center relative z-10">
                  <ChamferButton size="play">
                    Play
                  </ChamferButton>
                  <Dropdown
                    value={dropdownValue}
                    options={["1.21.4 v", "1.20.1", "1.19.4"]}
                    onChange={setDropdownValue}
                  />
                  <ChamferButton variant="secondary" className="px-4 py-4" style={{ clipPath: "polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)" }}>
                    <Settings size={20} />
                  </ChamferButton>
                </div>
              </ChamferCard>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-muted uppercase tracking-wider">Component Library</h2>
              <div className="grid grid-cols-2 gap-8">

                <div className="space-y-6">
                  <ChamferCard className="p-6 space-y-4">
                    <h3 className="font-bold border-b-2 border-borders pb-2 mb-4">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                      <ChamferButton variant="primary">Primary</ChamferButton>
                      <ChamferButton variant="secondary">Secondary</ChamferButton>
                      <ChamferButton variant="ghost">Ghost</ChamferButton>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <ChamferButton size="sm">Small</ChamferButton>
                      <ChamferButton size="md">Medium</ChamferButton>
                      <ChamferButton size="lg">Large Button</ChamferButton>
                    </div>
                  </ChamferCard>

                  <ChamferCard className="p-6 space-y-4">
                    <h3 className="font-bold border-b-2 border-borders pb-2 mb-4">Chips & Dialogs</h3>
                    <div className="flex gap-2">
                      <Chip>Accent</Chip>
                      <Chip color="muted">Muted</Chip>
                      <Chip variant="solid" color="text">Solid</Chip>
                    </div>
                    <div className="mt-4">
                      <ChamferButton onClick={() => setDialogOpen(true)}>Open Dialog</ChamferButton>
                    </div>
                  </ChamferCard>
                </div>

                <div className="space-y-6">
                  <ChamferCard className="p-6 space-y-4">
                    <h3 className="font-bold border-b-2 border-borders pb-2 mb-4">Segment Bars</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1 text-muted">
                          <span>RAM</span>
                          <span>4 GB of 8 GB</span>
                        </div>
                        <SegmentBar value={50} segments={8} color="text" />
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1 text-muted">
                          <span>DOWNLOADING SODIUM</span>
                          <span>70%</span>
                        </div>
                        <SegmentBar value={70} segments={10} color="accent" />
                      </div>
                    </div>
                  </ChamferCard>

                  <ChamferCard className="p-6 space-y-4">
                    <h3 className="font-bold border-b-2 border-borders pb-2 mb-4">Toasts</h3>
                    <ChamferButton onClick={() => setToastVisible(true)}>Show Toast</ChamferButton>
                    {toastVisible && (
                      <div className="mt-4">
                         <Toast
                          id="1"
                          title="Download Complete"
                          description="Fabric 1.21.4 has been installed."
                          onClose={() => setToastVisible(false)}
                          duration={0}
                        />
                      </div>
                    )}
                  </ChamferCard>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Right Activity Panel (placeholder) */}
        <div className="w-[260px] bg-ground border-l-2 border-borders p-6 hidden lg:block">
          <h3 className="text-xs font-mono text-muted uppercase tracking-wider mb-4">Downloading</h3>
          <p className="font-bold mb-2">Sodium 0.6.0</p>
          <SegmentBar value={70} segments={10} className="mb-2" />
          <p className="text-xs font-mono text-muted">70% / 12.4 MB/s</p>

          <h3 className="text-xs font-mono text-muted uppercase tracking-wider mt-8 mb-4">Memory</h3>
          <SegmentBar value={50} segments={8} color="text" className="mb-2" />
          <p className="text-xs font-bold font-mono">4 GB of 8 GB</p>
        </div>
      </div>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="Settings">
        <p className="text-muted mb-4 mt-4">Adjust your launcher settings here.</p>
        <div className="flex justify-end gap-4 mt-8">
          <ChamferButton variant="ghost" onClick={() => setDialogOpen(false)}>Cancel</ChamferButton>
          <ChamferButton onClick={() => setDialogOpen(false)}>Save</ChamferButton>
        </div>
      </Dialog>
    </div>
  );
}

export default App;
