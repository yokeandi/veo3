document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');

    generateBtn.addEventListener('click', () => {
        // Mengambil nilai dari semua input
        const values = {
            judul: document.getElementById('judul').value,
            deskripsiKarakter: document.getElementById('deskripsiKarakter').value,
            suaraKarakter: document.getElementById('suaraKarakter').value,
            aksiKarakter: document.getElementById('aksiKarakter').value,
            ekspresiKarakter: document.getElementById('ekspresiKarakter').value,
            latar: document.getElementById('latar').value,
            gerakanKamera: document.getElementById('gerakanKamera').value.split(' (')[0], // Ambil nama inggrisnya saja
            pencahayaan: document.getElementById('pencahayaan').value,
            gayaVideo: document.getElementById('gayaVideo').value,
            kualitasVisual: document.getElementById('kualitasVisual').value,
            suasana: document.getElementById('suasana').value,
            suaraLingkungan: document.getElementById('suaraLingkungan').value,
            dialog: document.getElementById('dialog').value,
            negativePrompt: document.getElementById('negativePrompt').value,
        };

        // Membuat prompt Bahasa Indonesia
        const promptIndonesia = generateIndonesianPrompt(values);
        document.getElementById('hasilIndonesia').value = promptIndonesia;

        // Membuat prompt Bahasa Inggris
        const promptInggris = generateEnglishPrompt(values);
        document.getElementById('hasilInggris').innerHTML = promptInggris;
    });

    function generateIndonesianPrompt(v) {
        let prompt = `Judul Scene: ${v.judul}\n\n`;
        prompt += `Deskripsi Karakter Inti:\n${v.deskripsiKarakter}\n\n`;
        prompt += `Detail Suara Karakter:\n${v.suaraKarakter}\n\n`;
        prompt += `Aksi Karakter: ${v.aksiKarakter}\n\n`;
        prompt += `Ekspresi Karakter: ${v.ekspresiKarakter}\n\n`;
        prompt += `Latar Tempat & Waktu:\n${v.latar}\n\n`;
        prompt += `Detail Visual Tambahan:\n`;
        prompt += `- Gerakan Kamera: ${document.getElementById('gerakanKamera').value}\n`;
        prompt += `- Pencahayaan: ${v.pencahayaan}\n`;
        prompt += `- Gaya Video/Art Style: ${v.gayaVideo}\n`;
        prompt += `- Kualitas Visual: ${v.kualitasVisual}\n\n`;
        prompt += `Suasana Keseluruhan: ${v.suasana}\n\n`;
        prompt += `Suara Lingkungan/Ambience:\n${v.suaraLingkungan}\n\n`;
        prompt += `Dialog Karakter:\n${v.dialog}\n\n`;
        prompt += `Negative Prompt:\n${v.negativePrompt}`;
        
        return prompt;
    }

    function generateEnglishPrompt(v) {
        // Kembangkan prompt agar lebih detail dan naratif
        let finalPrompt = `**Scene Title:** ${v.judul}. `;
        finalPrompt += `A cinematic, realistic 4K video. `;
        
        finalPrompt += `**Main Character Description:** A detailed shot of ${v.deskripsiKarakter}. `;
        finalPrompt += `**Character Voice Details:** The character's voice is consistent throughout the video, ${v.suaraKarakter}. `;
        finalPrompt += `**Character Action:** The character is ${v.aksiKarakter}. `;
        finalPrompt += `**Character Expression:** The character shows ${v.ekspresiKarakter}. `;

        finalPrompt += `**Setting & Time:** The scene is set at ${v.latar}. `;
        
        finalPrompt += `**Additional Visual Details:** `;
        finalPrompt += `The camera movement is a cinematic ${v.gerakanKamera}. `;
        finalPrompt += `The lighting is ${v.pencahayaan}. `;
        finalPrompt += `The art style is ${v.gayaVideo}. `;
        finalPrompt += `Visual quality is ${v.kualitasVisual}. `;

        finalPrompt += `**Overall Atmosphere:** The overall atmosphere is ${v.suasana}. `;
        
        finalPrompt += `**Environmental Sound/Ambience:** ${v.suaraLingkungan}. `;
        
        // Dialog tidak diterjemahkan
        if (v.dialog) {
            finalPrompt += `**Character's Dialogue:** ${v.dialog}. `;
        }

        finalPrompt += `**Negative Prompt:** Avoid the following: ${v.negativePrompt}.`;

        // Ganti baris baru dengan spasi untuk format paragraf dan format HTML
        return finalPrompt.replace(/\n/g, '<br>');
    }
}); 