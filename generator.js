/**
 * Gerador de JSON de Fotos
 * Cria um JSON com 99 álbuns, cada um com 15 fotos
 * Todas as URLs são reais e funcionais usando o serviço Picsum Photos
 */

const fs = require('fs');

function generatePhotosJSON() {
  const photos = [];
  let currentId = 1;
  

  for (let albumId = 1; albumId <= 99; albumId++) {
    
    for (let i = 0; i < 15; i++) {
      const imageId = ((albumId - 1) * 15 + i) % 1000 + 1;
      
      photos.push({
        "albumId": albumId.toString(),
        "id": currentId.toString(),
        "title": getLoremIpsumTitle(),
        "url": `https://picsum.photos/id/${imageId}/5000/3333`,
        "thumbnailUrl": `https://picsum.photos/id/${imageId}/150/150`
      });
      
      currentId++;
    }
  }
  
  return {
    "photos": photos,
    "profile": {
      "name": "juliaM"
    }
  };
}

function getLoremIpsumTitle() {
  const loremIpsumPhrases = [
    "lorem ipsum dolor sit amet consectetur adipiscing elit",
    "sed do eiusmod tempor incididunt ut labore et dolore",
    "magna aliqua ut enim ad minim veniam quis",
    "nostrud exercitation ullamco laboris nisi ut aliquip ex",
    "ea commodo consequat duis aute irure dolor in",
    "reprehenderit in voluptate velit esse cillum dolore eu",
    "fugiat nulla pariatur excepteur sint occaecat cupidatat non",
    "proident sunt in culpa qui officia deserunt mollit",
    "anim id est laborum sed ut perspiciatis unde",
    "omnis iste natus error sit voluptatem accusantium doloremque",
    "laudantium totam rem aperiam eaque ipsa quae ab",
    "illo inventore veritatis et quasi architecto beatae vitae",
    "dicta sunt explicabo nemo enim ipsam voluptatem quia",
    "voluptas sit aspernatur aut odit aut fugit sed",
    "quia consequuntur magni dolores eos qui ratione voluptatem",
    "sequi nesciunt neque porro quisquam est qui dolorem",
    "ipsum quia dolor sit amet consectetur adipisci velit",
    "sed quia non numquam eius modi tempora incidunt",
    "ut labore et dolore magnam aliquam quaerat voluptatem",
    "ut enim ad minima veniam quis nostrum exercitationem",
    "ullam corporis suscipit laboriosam nisi ut aliquid ex",
    "ea commodi consequatur quis autem vel eum iure",
    "reprehenderit qui in ea voluptate velit esse quam",
    "nihil molestiae consequatur vel illum qui dolorem eum",
    "fugiat quo voluptas nulla pariatur at vero eos",
    "et accusamus et iusto odio dignissimos ducimus qui",
    "blanditiis praesentium voluptatum deleniti atque corrupti quos",
    "dolores et quas molestias excepturi sint occaecati cupiditate",
    "non provident similique sunt in culpa qui officia",
    "deserunt mollitia animi id est laborum et dolorum"
  ];
  
  return loremIpsumPhrases[Math.floor(Math.random() * loremIpsumPhrases.length)];
}

const photosData = generatePhotosJSON();

try {
  fs.writeFileSync('photos.json', JSON.stringify(photosData, null, 2));
  console.log(`Arquivo 'photos.json' criado com sucesso!`);
  console.log(`Total de fotos geradas: ${photosData.photos.length}`);
} catch (error) {
  console.error(`Erro ao escrever o arquivo: ${error.message}`);
}