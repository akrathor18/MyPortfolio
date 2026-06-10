"use client";
import { Monitor, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function ImagesPreview({ project }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const screenshots = project.screenshots;

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    const goNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % screenshots.length);
    };
    const goPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };

    if (!screenshots || screenshots.length === 0) return null;

    const selectedScreenshot = selectedIndex !== null ? screenshots[selectedIndex] : null;

    return (
        <>
            {/* Screenshots Grid */}
            <section className="py-12 md:py-20 px-6 border-t border-border relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Monitor className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold text-foreground">Screenshots</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={screenshot.id || index}
                                onClick={() => openModal(index)}
                                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer text-left"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-video overflow-hidden bg-muted">
                                    <img
                                        src={screenshot.image}
                                        alt={screenshot.title}
                                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                                </div>

                                {/* Card Info */}
                                <div className="p-4">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 flex-1">
                                            {screenshot.title}
                                        </h3>
                                        {screenshot.feature && (
                                            <span className="px-2 py-1 text-xs font-semibold bg-primary/10 border border-primary/30 rounded-full text-primary whitespace-nowrap">
                                                {screenshot.feature}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {screenshot.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </section>

            {/* Fullscreen Modal */}
            {selectedScreenshot && (
                <div
                    className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-5xl flex flex-col bg-card border border-primary/30 rounded-xl shadow-2xl overflow-hidden"
                        style={{ maxHeight: '90vh' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 z-20 p-2 bg-black/50 hover:bg-black/70 border border-white/10 rounded-lg transition-all duration-200 text-white"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Prev / Next */}
                        {screenshots.length > 1 && (
                            <>
                                <button
                                    onClick={goPrev}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 border border-white/10 rounded-lg transition-all duration-200 text-white"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={goNext}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 border border-white/10 rounded-lg transition-all duration-200 text-white"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        {/* Image Area */}
                        <div className="flex-1 min-h-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center overflow-hidden"
                             style={{ maxHeight: 'calc(90vh - 110px)' }}>
                            <img
                                src={selectedScreenshot.image}
                                alt={selectedScreenshot.title}
                                className="max-w-full max-h-full object-contain"
                                style={{ display: 'block' }}
                            />
                        </div>

                        {/* Info Footer */}
                        <div className="flex-shrink-0 p-5 bg-card border-t border-primary/20">
                            <div className="flex items-center justify-between gap-3 mb-1">
                                <h3 className="text-xl font-bold text-foreground flex-1">
                                    {selectedScreenshot.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {selectedScreenshot.feature && (
                                        <span className="px-3 py-1 text-sm font-semibold bg-primary/10 border border-primary/30 rounded-full text-primary whitespace-nowrap">
                                            {selectedScreenshot.feature}
                                        </span>
                                    )}
                                    {screenshots.length > 1 && (
                                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                                            {selectedIndex + 1} / {screenshots.length}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {selectedScreenshot.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ImagesPreview;
