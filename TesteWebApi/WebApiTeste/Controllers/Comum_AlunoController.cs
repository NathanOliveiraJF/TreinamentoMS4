using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiTeste.DTOs;
using WebApiTeste.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiTeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Comum_AlunoController : ControllerBase
    {
        // GET: api/<AlunoController>
        [HttpGet]
        public ActionResult<AlunoDTO> Get()
        {

            return Ok(alunos.Select(x => new AlunoDTO(x)).ToArray());
        }

        // GET api/<AlunoController>/5
        [HttpGet("{id}")]
        public ActionResult<AlunoDTO> GetById(string id)
        {
            var _aluno = alunos.Where(x => x.Id == id).FirstOrDefault();
            if(_aluno == null)
                return NotFound();
            return Ok(new AlunoDTO(_aluno));
        }

        // POST api/<AlunoController>
        [HttpPost]
        public ActionResult<Aluno> Post([FromBody] AlunoDTO value)
        {

            var lastM = alunos.Max(x => x.Matricula);

            var objnovo = new Aluno();
            
            objnovo.Id = Guid.NewGuid().ToString();
            objnovo.Matricula = lastM + 1;
            objnovo.Nome = value.Nome;

            alunos.Add(objnovo);
            
            return CreatedAtAction(nameof(GetById), new { id = value.Id }, new AlunoDTO(objnovo));
        }

        // PUT api/<AlunoController>/5
        [HttpPut("{id}")]
        public ActionResult<Aluno> Put(string id, [FromBody] Aluno value)
        {
            var _aluno = alunos.Where(x => x.Id == id).FirstOrDefault();

            if (id != value.Id)
                return BadRequest();

            if (_aluno == null)
                return NotFound();

            _aluno.Nome = value.Nome;
            _aluno.Matricula = value.Matricula;

            return NoContent();
        }

        // DELETE api/<AlunoController>/5
        [HttpDelete("{id}")]
        public ActionResult<Aluno> Delete(string id)
        {
            var _aluno = alunos.Where(x => x.Id == id).FirstOrDefault();

            if (_aluno == null)
                return NotFound();


            alunos.Remove(_aluno);

            return NoContent();

        }

        private static IList<Aluno> alunos = new List<Aluno>
        {
            new Aluno {Id = "A1", Matricula = 123, Nome = "Ana"},
            new Aluno {Id = "A1", Matricula = 124, Nome = "Bruno"},
            new Aluno {Id = "A1", Matricula = 125, Nome = "Carlos"}
        };
    }
}
