using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiTeste.Models;

namespace WebApiTeste.DTOs
{
    public class AlunoDTO
    {
        public AlunoDTO(Aluno obj)
        {
            Id = obj.Id;
            Nome = obj.Nome;
        }

        public string Id { get; set; }
        public string Nome { get; set; }
    }
}
