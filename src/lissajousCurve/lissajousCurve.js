function lissajousCurve(currentFrame, maxFrames, xAmplitude, yAmplitude, xFrequency, yFrequency, phaseDifference) {
    const angle = (currentFrame / maxFrames) * 2 * Math.PI;
    const x = xAmplitude * Math.sin(xFrequency * angle + phaseDifference);
    const y = yAmplitude * Math.sin(yFrequency * angle);
    return {x, y};
}
