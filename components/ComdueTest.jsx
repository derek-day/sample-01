import fs from 'fs/promises';
import path from 'path';

export async function ComdueTest() {
    const postsDirectory = path.join(process.cwd(), '../public/pdfs/');
    let posts = await fs.readdir(postsDirectory);
    
    try {
        let promises = posts.map(async (filename) => {
            try {
                const post = await import(`../public/pdfs/${filename}`);
                const slug = filename.substring(0, filename.lastIndexOf('.'));
                
                return {
                    "slug": slug,
                    "attributes": post.attributes,
                    "html": post.html
                };
            } catch (error) {
                console.error(`Error importing post ${filename}:`, error);
                throw error;
            }
        });

        let data = await Promise.all(promises);

        data.sort((a, b) => {
            let dateA = new Date(a.attributes.date);
            let dateB = new Date(b.attributes.date);
            
            return dateB - dateA;
        })

        console.log(data);

        return data

    } catch(err) {
        throw err
    }
}

export default ComdueTest;
