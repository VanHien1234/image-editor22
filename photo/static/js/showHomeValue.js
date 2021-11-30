var brightness = document.getElementById("brightness");
var brightness_output = document.getElementById("brightness-value");

var contrast = document.getElementById("contrast");
var contrast_output = document.getElementById("contrast-value");

var saturation = document.getElementById("saturation");
var saturation_output = document.getElementById("saturation-value");

var Vibrance = document.getElementById("vibrance");
var Vibrance_output = document.getElementById("vibrance-value");

var Exposure = document.getElementById("exposure");
var Exposure_output = document.getElementById("exposure-value");

var hue = document.getElementById("hue");
var hue_output = document.getElementById("hue-value");

var noise = document.getElementById("noise");
var noise_output = document.getElementById("noise-value");

var clip = document.getElementById("clip");
var clip_output = document.getElementById("clip-value");

var stackBlur = document.getElementById("stackBlur");
var stackBlur_output = document.getElementById("stackBlur-value");

brightness_output.innerHTML = brightness.value;
brightness.oninput = function () {
    brightness_output.innerHTML = this.value;
}

contrast_output.innerHTML = contrast.value;
contrast.oninput = function () {
    contrast_output.innerHTML = this.value;
}

saturation_output.innerHTML = saturation.value;
saturation.oninput = function () {
    saturation_output.innerHTML = this.value;
}

Exposure_output.innerHTML = Exposure.value;
Exposure.oninput = function () {
    Exposure_output.innerHTML = this.value;
}

Vibrance_output.innerHTML = Vibrance.value;
Vibrance.oninput = function () {
    Vibrance_output.innerHTML = this.value;
}

hue_output.innerHTML = hue.value;
hue.oninput = function () {
    hue_output.innerHTML = this.value;
}

noise_output.innerHTML = noise.value;
noise.oninput = function () {
    noise_output.innerHTML = this.value;
}

clip_output.innerHTML = clip.value;
clip.oninput = function () {
    clip_output.innerHTML = this.value;
}

stackBlur_output.innerHTML = stackBlur.value;
stackBlur.oninput = function () {
    stackBlur_output.innerHTML = this.value;
}
