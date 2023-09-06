import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
    base : '',
    build : {
        rollupOptions : {
            input : {
                main : resolve(__dirname, 'index.html'),
                howItWorks : resolve(__dirname, 'howItWorks.html'),
                FAQ : resolve(__dirname, 'FAQ.html'),
                whyChooseUs : resolve(__dirname, 'whyChooseUs.html'),
                contact : resolve(__dirname, 'contact.html'),
                privacyPolicy : resolve(__dirname, 'privacyPolicy.html'),
                refundPolicy : resolve(__dirname, 'refundPolicy.html'),
                termsAndCondition : resolve(__dirname, 'termsAndCondition.html')
            }
        }
    }
})