/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export async function audioContext({ sampleRate }) {
  const context = new (window.AudioContext || window.webkitAudioContext)({ sampleRate });
  await context.resume();
  return context;
}

export function base64ToArrayBuffer(base64) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

export function updateFunctionInfo(functionName, params = {}) {
  const functionInfo = document.getElementById('functionInfo');
  if (functionInfo) {
    const timestamp = new Date().toLocaleTimeString();
    const paramsString = JSON.stringify(params, null, 2);
    functionInfo.textContent = `[${timestamp}] Function: ${functionName}\nParameters: ${paramsString}`;
  }
}