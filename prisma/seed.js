import { getPrismaClient } from "../lib/prisma.js";
import {testimonials,blogSeedData, jobs, teamMembers, companies, products} from '../assets/data.js'


const prisma = getPrismaClient();

async function main() {

    // products seeds
    if(products && products.length>0){
        await prisma.products.createMany({
            data:products,
            skipDuplicates: true,
        })
    }

    // testimonials data seed
    if(testimonials && testimonials.length>0){
        await prisma.testimonial.createMany({
            data:testimonials,
            skipDuplicates: true,
        })
    }

    // blog data seed
    if(blogSeedData && blogSeedData.length>0){
        await prisma.blog.createMany({
            data:blogSeedData,
            skipDuplicates:true
        });
    };

    // job data seed
    if(jobs && jobs.length>0){
        await prisma.job.createMany({
            data:jobs,
            skipDuplicates:true,
        });
    }

    const updateTeamData = teamMembers.map(memebr=>({
        name:memebr.name,
        title:memebr.title,
        bio:memebr.bio,
        imageUrl:memebr.imageUrl,
        showAt:["GROUP","PLANTATION"]
    }))

    if(teamMembers && teamMembers.length>0){
        await prisma.teamMember.createMany({
            data:updateTeamData,
            skipDuplicates:true,
        })
    }

    if(companies&&companies.length>0){
        await prisma.company.createMany({
            data:companies,
            skipDuplicates:true,
        })
    }
}

main()
  .then(() => {
    console.log('✅ Database seeded successfully!');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });