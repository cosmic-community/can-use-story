import { Panel } from '@/types'

export default function PanelReader({ panels }: { panels: Panel[] }) {
  if (!panels || panels.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-ink-600">No panels available for this chapter yet.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-8 bg-black">
      {panels.map((panel) => (
        <div key={panel.id} className="relative">
          {panel.metadata?.panel_image && (
            <img
              src={`${panel.metadata.panel_image.imgix_url}?w=1600&auto=format,compress`}
              alt={panel.metadata?.panel_title || panel.title}
              className="w-full block"
            />
          )}
          {(panel.metadata?.dialogue || panel.metadata?.caption) && (
            <div className="px-4 py-6 bg-ink-900 border-l-2 border-blood-700">
              {panel.metadata?.dialogue && (
                <p className="text-white text-lg italic leading-relaxed mb-2">
                  "{panel.metadata.dialogue}"
                </p>
              )}
              {panel.metadata?.caption && (
                <p className="text-ink-600 text-sm">{panel.metadata.caption}</p>
              )}
            </div>
          )}
        </div>
      ))}
      <div className="text-center py-8 text-blood-700 font-display tracking-widest text-sm">
        — END OF CHAPTER —
      </div>
    </div>
  )
}