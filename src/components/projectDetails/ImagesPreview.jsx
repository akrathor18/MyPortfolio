"use client";
import { Monitor, X } from 'lucide-react';

import { useState } from 'react';
function ImagesPreview(project) {
    const [selectedScreenshot, setSelectedScreenshot] = useState(null);
    return (
        <>
            {project.project.screenshots && project.project.screenshots.length > 0 && (
                <section className="py-12 md:py-20 px-6 border-t border-border relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <Monitor className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-bold text-foreground">Screenshots</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.project.screenshots.map((screenshot, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedScreenshot(screenshot)}
                                    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer text-left"
                                >
                                    {/* Screenshot Placeholder */}
                                    <div className="aspect-video flex items-center justify-center relative overflow-hidden">
                                        <img
                                            src={screenshot.image}
                                            alt={screenshot.title}
                                            className="w-full h-full object" />

                                    </div>
                                    {/* Screenshot Info */}
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                            {screenshot.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {screenshot.description}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                </section>
            )}
            {/* Image Preview Modal */}
            {selectedScreenshot && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedScreenshot(null)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] bg-card border border-primary/30 rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedScreenshot(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 rounded-lg transition-all duration-300 text-foreground hover:text-primary"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Container */}
                        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center min-h-[200px] md:min-h-[500px] relative">
                        <img
                                src={selectedScreenshot.image}
                                alt={selectedScreenshot.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                
                        {/* Screenshot Info */}
                        <div className="p-6 bg-card border-t border-primary/20">
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                {selectedScreenshot.title}
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {selectedScreenshot.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ImagesPreview
