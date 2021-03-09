using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiTeste.Models;

namespace WebApiTeste.Data
{
    public class WebApiTesteContext : DbContext
    {
        public WebApiTesteContext (DbContextOptions<WebApiTesteContext> options)
            : base(options)
        {
        }

        public DbSet<Aluno> Aluno { get; set; }
    }
}
